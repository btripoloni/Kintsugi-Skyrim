import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { AddressLibraryforSKSEPlugins } from "./AddressLibraryforSKSEPlugins.ts";
import { Powerofthrees_Tweaks } from "./Powerofthrees_Tweaks.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/Spell%20Perk%20Item%20Distributor-36869-7-1-3-1713397024.7z?download=",
    sha256: "c7047a7f096bca2fb3737d13113d252936061689acb1a5bcb8fbb5a91dab1a90",
    unpack: true
})

const SpellPerkItemDistributor:SkyrimPackage = new SkyrimPackage("SpellPerkItemDistributor", "7.1.3", source)
SpellPerkItemDistributor.dependencies.push(AddressLibraryforSKSEPlugins, Powerofthrees_Tweaks)
SpellPerkItemDistributor.postBuild = `
mkdir Data
mv "Spell Perk Item Distributor FOMOD Installer/AE/SKSE" Data/
rm -r "Spell Perk Item Distributor FOMOD Installer" 
`
export { SpellPerkItemDistributor}