import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { AddressLibraryforSKSEPlugins } from "./AddressLibraryforSKSEPlugins.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/Papyrus%20Tweaks%204.1.1-77779-4-1-1-1761101872.zip?download=1",
    sha256: "10e69c98d60d4889e6dfc64b80142c8586638e23725dc08cfa8a917f65b1e776",
    unpack: true
})

const PapyrusTweaks:SkyrimPackage = new SkyrimPackage("PapyrusTweaks" , "4.6", source)
PapyrusTweaks.dependencies.push(AddressLibraryforSKSEPlugins)
PapyrusTweaks.postBuild = `
mkdir Data
mv SKSE Data/
mv Script Data/
`

export { PapyrusTweaks }