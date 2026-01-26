import { sources } from "@btripoloni/kintsugi@0.1.0";
import { SkyrimPackage } from "../SkyrimPackage.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/Myrwatch%20-%20House%20Fix-64108-1-1-1-1658728465.7z?download=",
    sha256: "",
    unpack: true
})

const Myrwatch_EditableHomeCells:SkyrimPackage = new SkyrimPackage("Myrwatch_EditableHomeCells", "1.1.1", source)
Myrwatch_EditableHomeCells.postBuild = `
Mkdir Data
mv myrwatchhomefixer.esp Data/
`

export { Myrwatch_EditableHomeCells }

