import { sources } from "@btripoloni/kintsugi@0.1.0";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { AddressLibraryforSKSEPlugins } from "./AddressLibraryforSKSEPlugins.ts";
import { Powerofthrees_Tweaks } from "./Powerofthrees_Tweaks.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/Base%20Object%20Swapper-60805-3-4-1-1752606013.7z?download=",
    sha256: "",
    unpack: true
})

const BaseObjectSwapper:SkyrimPackage = new SkyrimPackage("BaseObjectSwapper", "3.4.1", source)
BaseObjectSwapper.dependencies.push(AddressLibraryforSKSEPlugins, Powerofthrees_Tweaks)

export { BaseObjectSwapper }