import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <p>
        <Link to="/with-frontend-error">Go to page with Frontend error</Link>
      </p>
      <p>
        <Link to="/with-loader-error">Go to page with Loader error</Link>
      </p>
      <p>
        <Link to="/9999/with-loader-error">
          Go to page with Loader error and params
        </Link>
      </p>
    </div>
  );
}
