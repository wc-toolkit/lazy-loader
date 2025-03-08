import { generateLazyLoader } from "./loader-generator.js";
import { PackageLinkPhaseParams } from "@custom-elements-manifest/analyzer";
import type { LazyLoaderOptions } from "./types.js";

export function lazyLoaderPlugin(options: LazyLoaderOptions) {
  return {
    name: "@wc-toolkit/lazy-loader",
    packageLinkPhase({ customElementsManifest }: PackageLinkPhaseParams) {
      generateLazyLoader(customElementsManifest, options);
    },
  };
}
