import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const contacts = sqliteTable("contacts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  branch: text("branch").notNull(), // 'leopardstown' | 'dun-laoghaire'
  iphoneModel: text("iphone_model"),
  ipadModel: text("ipad_model"),
  samsungS: text("samsung_s"),
  samsungA: text("samsung_a"),
  samsungNote: text("samsung_note"),
  samsungTablet: text("samsung_tablet"),
  androidOther: text("android_other"),
  gameConsole: text("game_console"),
  laptopBrand: text("laptop_brand"),
  message: text("message").notNull(),
  createdAt: text("created_at").default(sql`(datetime('now'))`),
});

export const repairBookings = sqliteTable("repair_bookings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  branch: text("branch").notNull(),
  serviceType: text("service_type").notNull(),
  deviceModel: text("device_model").notNull(),
  issue: text("issue").notNull(),
  status: text("status").default("pending").notNull(), // pending | confirmed | in_progress | completed
  createdAt: text("created_at").default(sql`(datetime('now'))`),
  updatedAt: text("updated_at").default(sql`(datetime('now'))`),
});

export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;
export type RepairBooking = typeof repairBookings.$inferSelect;
export type NewRepairBooking = typeof repairBookings.$inferInsert;
