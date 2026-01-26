import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/RaceMenu%20Anniversary%20Edition%20v0-4-19-16-19080-0-4-19-16-1706297897.7z?download=",
    sha256: "",
    unpack: true
})

export const RaceMenu:SkyrimPackage = new SkyrimPackage("RaceMenu", "0.4.19.16", source)
