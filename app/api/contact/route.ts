import { NextRequest, NextResponse } from "next/server";
import { db, contacts } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name, email, phone, branch,
      iphoneModel, ipadModel, samsungS, samsungA,
      samsungNote, samsungTablet, androidOther, gameConsole,
      laptopBrand, message,
    } = body;

    if (!name || !email || !phone || !branch || !message) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    await db.insert(contacts).values({
      name,
      email,
      phone,
      branch,
      iphoneModel: iphoneModel || null,
      ipadModel: ipadModel || null,
      samsungS: samsungS || null,
      samsungA: samsungA || null,
      samsungNote: samsungNote || null,
      samsungTablet: samsungTablet || null,
      androidOther: androidOther || null,
      gameConsole: gameConsole || null,
      laptopBrand: laptopBrand || null,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
