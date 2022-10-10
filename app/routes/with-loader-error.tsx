import * as Sentry from "@sentry/remix";

const getUser = async () => {
  const user = { id: "1", email: "example@example.com" };
  console.log("🔥 Sentry user");
  Sentry.setUser(user);
  return user;
};

export const loader = async () => {
  await getUser();
  throw new Error("Sentry Loader Error");
};

export default function () {
  return <div>Loader with error route</div>;
}
