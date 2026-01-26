import { sources } from "jsr:@btripoloni/kintsugi@0.1.0";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { skse } from "./skse.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/JContainers%20SE-16495-4-2-9-1705929247.7z?download=",
    sha256: "",
    unpack: true
})

const JContainers:SkyrimPackage = new SkyrimPackage("JContainers", "4.2.9", source)
JContainers.dependencies.push(skse)

export { JContainers }