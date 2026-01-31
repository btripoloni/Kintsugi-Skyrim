import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { AddressLibraryforSKSEPlugins } from "./AddressLibraryforSKSEPlugins.ts";
import { Powerofthrees_Tweaks } from "./Powerofthrees_Tweaks.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/Base%20Object%20Swapper-60805-3-4-1-1752606013.7z?download=",
    sha256: "ae1f681c91522a5545eb0bd6b2b174491b34d50591c98a3a8dad6538a791ba9f",
    unpack: true
})

const BaseObjectSwapper:SkyrimPackage = new SkyrimPackage("BaseObjectSwapper", "3.4.1", source)
BaseObjectSwapper.dependencies.push(AddressLibraryforSKSEPlugins, Powerofthrees_Tweaks)
BaseObjectSwapper.postBuild = `
mkdir Data
mv "Base Object Swapper FOMOD Installer/AE/SKSE" Data/
rm -r "Base Object Swapper FOMOD Installer"
`

export { BaseObjectSwapper }