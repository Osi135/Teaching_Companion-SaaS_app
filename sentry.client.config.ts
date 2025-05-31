import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://576d3e5e7a3f96340375384dbf2e2499@o4509418505961472.ingest.de.sentry.io/4509418509959248",

  integrations: [
    Sentry.replayIntegration({
      // maskAllText: false,
      // blockAllMedia: false,
    }),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});