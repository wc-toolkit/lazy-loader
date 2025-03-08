import { describe, expect, test } from "vitest";
import { generateLazyLoader } from "../loader-generator";
import manifest from "./shoelace-cem.json";


describe("loader-generator", () => {
  test("generateLoader", async () => {
    await generateLazyLoader(manifest, {
      importPathTemplate: (_, tagName) => `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/${tagName.replace('sl-', '')}/${tagName.replace('sl-', '')}.js`,
      outdir: "./demo",
      reducedFOUC: true,
    });

    expect(true).toBe(true);
  });
});