/**
 * Post-OAuth landing — runs after NextAuth has set its JWT session cookie via
 * the Google callback. We also mint our own HMAC `ti_admin_session` cookie so
 * the admin chrome behaves identically to the password-login path (the custom
 * cookie is the source of truth when NextAuth's cookie misbehaves on
 * localhost/Turbopack — see admin-session.ts for the why).
 */
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { users } from "@/db/schema";
import {
  ADMIN_COOKIE_NAME,
  adminCookieOptions,
  mintAdminSessionValue,
} from "@/lib/admin-session";

export async function GET(req: Request) {
  const session = await auth();
  const url = new URL(req.url);
  const fromParam = url.searchParams.get("from");
  const dest = fromParam && fromParam.startsWith("/") ? fromParam : "/admin";

  if (!session?.user?.email) {
    return NextResponse.redirect(new URL("/admin/login?error=oauth", req.url));
  }

  const [row] = await db
    .select()
    .from(users)
    .where(eq(users.email, session.user.email.toLowerCase()))
    .limit(1);
  if (!row) {
    return NextResponse.redirect(
      new URL("/admin/login?error=not-authorized", req.url),
    );
  }

  const value = mintAdminSessionValue(row.id, row.email);
  const res = NextResponse.redirect(new URL(dest, req.url));
  res.cookies.set(ADMIN_COOKIE_NAME, value, adminCookieOptions());
  return res;
}
