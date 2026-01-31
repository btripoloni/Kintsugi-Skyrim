import { SkyrimPackage } from "../SkyrimPackage.ts";
import { sources } from "@btripoloni/kintsugi";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/powerofthree's%20Tweaks-51073-1-1-5-1-1756670335.7z?download=",
    sha256: "d20b6ffc7369de040b914e55e3ce6b6bde1f56b59d5151ae0d9b82d8d014e0ed",
    unpack: true
})

const Powerofthrees_Tweaks:SkyrimPackage = new SkyrimPackage("Powerofthrees_Tweaks", "1.15.1", source)
Powerofthrees_Tweaks.postBuild = `
mkdir Data
mv AE/SKSE Data/
mv Required/scripts Data/
rm -r fomod
rm -r Required
rm -r SE
`

export { Powerofthrees_Tweaks }