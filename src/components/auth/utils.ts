import { paths } from "@/config";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const redirectToLogin = () => {
  const headersList = headers();
  const fullUrl = headersList.get("x-url") || "";
  const params = fullUrl ? `?returnTo=${fullUrl}` : "";
  redirect(`${paths.login}${params}`);
};
