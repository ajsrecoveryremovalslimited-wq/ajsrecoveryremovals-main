import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  presets: ["vercel"],
  compatibilityDate: "2024-06-01",
  typescript: {
    strict: true,
  },
  routeRules: {
    // Cache static assets
    "**/*.js": { cache: { maxAge: 60 * 60 * 24 * 365 } },
    "**/*.css": { cache: { maxAge: 60 * 60 * 24 * 365 } },
    "**/*.svg": { cache: { maxAge: 60 * 60 * 24 * 365 } },
    "**/*.png": { cache: { maxAge: 60 * 60 * 24 * 365 } },
    "**/*.jpg": { cache: { maxAge: 60 * 60 * 24 * 365 } },
    // Don't cache HTML
    "/**": { cache: false },
  },
});
