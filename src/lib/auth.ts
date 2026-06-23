import { cookies } from "next/headers";

const ADMIN_SESSION_COOKIE = "forbes_admin_session";
const SESSION_VALUE = "authenticated";

export function isAdminAuthenticated(): boolean {
  const cookieStore = cookies();
  return cookieStore.get(ADMIN_SESSION_COOKIE)?.value === SESSION_VALUE;
}

export function getAdminSessionCookieName() {
  return ADMIN_SESSION_COOKIE;
}

export function getAdminSessionValue() {
  return SESSION_VALUE;
}