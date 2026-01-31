import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/RaceMenu%20Anniversary%20Edition%20v0-4-19-16-19080-0-4-19-16-1706297897.7z?download=",
    sha256: "6f726b9657a85a5b79352c98d2107d8911947771700893546d02540200937e7f",
    unpack: true
})

const RaceMenu:SkyrimPackage = new SkyrimPackage("RaceMenu", "0.4.19.16", source)
RaceMenu.postBuild = `
mkdir Data
mv "RaceMenu Anniversary Edition v0-4-19-16-19080-0-4-19-16-1706297897/SKSE" Data/
mv "RaceMenu Anniversary Edition v0-4-19-16-19080-0-4-19-16-1706297897/RaceMenu.bsa" Data/
mv "RaceMenu Anniversary Edition v0-4-19-16-19080-0-4-19-16-1706297897/RaceMenu.esp" Data/
mv "RaceMenu Anniversary Edition v0-4-19-16-19080-0-4-19-16-1706297897/RaceMenuPlugin.esp" Data/
rm -r "RaceMenu Anniversary Edition v0-4-19-16-19080-0-4-19-16-1706297897"
`

export { RaceMenu }
