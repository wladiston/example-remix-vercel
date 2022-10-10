/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

// Declare the environment variables exported in the root.tsx file
interface Window {
  ENV: {
    SENTRY_DSN: string;
  };
}
