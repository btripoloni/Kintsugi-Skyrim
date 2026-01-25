import { sources } from "jsr:@btripoloni/kintsugi@0.1.0";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { AddressLibraryforSKSEPlugins } from "./AddressLibraryforSKSEPlugins.ts";
import { Powerofthrees_Tweaks } from "./Powerofthrees_Tweaks.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/Spell%20Perk%20Item%20Distributor-36869-7-1-3-1713397024.7z?download=",
    sha256: "",
    unpack: true
})

const SpellPerkItemDistributor = new SkyrimPackage("SpellPerkItemDistributor", "7.1.3", source)
SpellPerkItemDistributor.dependencies.push(AddressLibraryforSKSEPlugins, Powerofthrees_Tweaks)

export { SpellPerkItemDistributor}