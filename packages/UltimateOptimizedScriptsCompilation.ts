import { sources } from "@btripoloni/kintsugi@0.1.0";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { Powerofthrees_Tweaks } from "./Powerofthrees_Tweaks.ts";
import { UnofficialSkyrimSpecialEditionPatch } from "./UnofficialSkyrimSpecialEditionPatch.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/Ultimate%20Optimized%20Scripts%20Compilation-122999-1-6-1756083572.7z?download=",
    sha256: "",
    unpack: true
})

const UltimateOptimizedScriptsCompilation:SkyrimPackage = new SkyrimPackage("Ultimate Optimized Scripts Compilation", "1.6", source)
UltimateOptimizedScriptsCompilation.dependencies.push(UnofficialSkyrimSpecialEditionPatch)

export { UltimateOptimizedScriptsCompilation }