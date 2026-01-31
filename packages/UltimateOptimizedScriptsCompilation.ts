import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { UnofficialSkyrimSpecialEditionPatch } from "./UnofficialSkyrimSpecialEditionPatch.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/Ultimate%20Optimized%20Scripts%20Compilation-122999-1-6-1756083572.7z?download=",
    sha256: "57c1dd6c676ee9e0b9922a9fc2574831a39dd5e51b2e45627b21a2e72673f1ca", 
    unpack: true
})

const UltimateOptimizedScriptsCompilation:SkyrimPackage = new SkyrimPackage("Ultimate Optimized Scripts Compilation", "1.6", source)
UltimateOptimizedScriptsCompilation.dependencies.push(UnofficialSkyrimSpecialEditionPatch)

export { UltimateOptimizedScriptsCompilation }