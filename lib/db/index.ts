import { createClient, type Client } from "@libsql/client";
import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql";
import * as schema from "./schema";

let _client: Client | null = null;
let _db: LibSQLDatabase<typeof schema> | null = null;

function getClient(): Client {
  if (_client) return _client;
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;
  if (!url) {
    throw new Error("TURSO_DATABASE_URL is not set");
  }
  _client = createClient({ url, authToken });
  return _client;
}

// Lazy proxy — the client is only created the first time db is actually used,
// not at module-import time. This lets `next build` succeed even when the
// Turso env vars are not present at build time.
export const db = new Proxy({} as LibSQLDatabase<typeof schema>, {
  get(_target, prop) {
    if (!_db) {
      _db = drizzle(getClient(), { schema });
    }
    return Reflect.get(_db, prop, _db);
  },
});

export * from "./schema";
