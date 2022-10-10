import type { LoaderArgs } from "@remix-run/node";
import * as Sentry from "@sentry/remix";

const getUser = async (id: string) => {
  const user = { id, email: "example@example.com" };
  console.log("🔥 Sentry user");
  Sentry.setUser(user);
  return user;
};

export const loader = async ({ params }: LoaderArgs) => {
  await getUser(params.id! + "_WILSON");
  throw new Error("Sentry Loader Error with params");
};

export default function () {
  return <div>Loader with error route</div>;
}
