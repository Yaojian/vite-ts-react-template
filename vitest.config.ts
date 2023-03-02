import { defineConfig } from "vitest/config";

export default defineConfig(() => {
  return {
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "scripts/vitestSetup.ts",
      testTimeout: 60_000,
      hookTimeout: 60_000,
      snapshotFormat: { escapeString: false, printBasicPrototype: false },
    },
  };
});
