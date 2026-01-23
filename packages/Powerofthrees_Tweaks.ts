import { SkyrimPackage } from "../SkyrimPackage.ts";
import { sources } from "jsr:@btripoloni/kintsugi@0.1.0";

const source = sources.fetch_url({
    url: "",
    sha256: "",
    unpack: true
})

const Powerofthrees_Tweaks = new SkyrimPackage("Powerofthrees_Tweaks", "1.15.1", source)
Powerofthrees_Tweaks.postBuild = `
mkdir Data
mv AE/SKSE Data/
mv Required/scripts Data/
rm -r fomod
rm -r Required
rm -r SE
`