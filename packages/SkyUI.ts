import { sources } from "@btripoloni/kintsugi@0.1.0";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { skse } from "./skse.ts";

const SkyUI_source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/SkyUI_5_2_SE-12604-5-2SE.7z?download=",
    sha256: "",
    unpack: true
})

const SkyUI:SkyrimPackage = new SkyrimPackage("SkyUI", "5.2", SkyUI_source)
SkyUI.dependencies.push(skse)

export { SkyUI }