import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { skse } from "./skse.ts";

const SkyUI_source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/SkyUI_5_2_SE-12604-5-2SE.7z?download=",
    sha256: "5375e0e91051f57ad463dfe3412bba58abb975f8479a968dd9d4e5d329431662",
    unpack: true
})

const SkyUI:SkyrimPackage = new SkyrimPackage("SkyUI", "5.2", SkyUI_source)
SkyUI.dependencies.push(skse)
SkyUI.postBuild = `
mkdir Data
mv SkyUI_SE.bsa" Data/
mv SkyUI_SE.esp" Data/
rm -r fomod
`

export { SkyUI }