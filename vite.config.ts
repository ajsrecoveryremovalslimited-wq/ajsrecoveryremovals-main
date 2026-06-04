import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: true,
  vite: {
    build: {
      outDir: ".output",
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { 
      entry: "server",
      presets: ["vercel"],
      outDir: ".output",
    },
  },
});
