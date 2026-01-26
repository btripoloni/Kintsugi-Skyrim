import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { AddressLibraryforSKSEPlugins } from "./AddressLibraryforSKSEPlugins.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/c4ca574f3ec11c2b24b63960683e928174a3fce3/Papyrus%20Tweaks%204.1.1-77779-4-1-1-1761101872.rar",
    sha256: "",
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