import { type Source, sources  } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";

const source:Source = sources.blank_source()

export const SE_1_16_1170:SkyrimPackage = new SkyrimPackage("skyrimse", "1.16.1170", source)