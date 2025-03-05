import { describe, expect, test } from "vitest";
import { generateLazyLoader } from "../loader-generator";
import manifest from "./shoelace-cem.json";


describe("loader-generator", () => {
  test("generateLoader", async () => {
    const loader = await generateLazyLoader(manifest, {
      importPathTemplate: (name, tagName) => `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/${tagName.replace('sl-', '')}/${tagName.replace('sl-', '')}.js`,
      outdir: "./demo",
    });

    expect(loader).toMatchSnapshot();
  });
});