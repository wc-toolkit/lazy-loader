import {
  Options,
  generateLazyLoader,
} from "./loader-generator.js";
import { PackageLinkPhaseParams } from "@custom-elements-manifest/analyzer";

export function customElementLazyLoaderPlugin(options: Options) {
  return {
    name: "@wc-toolkit/lazy-loader",
    packageLinkPhase({ customElementsManifest }: PackageLinkPhaseParams) {
      generateLazyLoader(customElementsManifest, options);
    },
  };
}
