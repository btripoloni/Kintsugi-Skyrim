import { sources } from "jsr:@btripoloni/kintsugi@0.1.0";
import { SkyrimPackage } from "../SkyrimPackage.ts";

const source = sources.fetch_url({
    url: "",
    sha256: "",
    unpack: true
})

const Myrwatch_EditableHomeCells = new SkyrimPackage("Myrwatch_EditableHomeCells", "1.1.1", source)
Myrwatch_EditableHomeCells.postBuild = `
Mkdir Data
mv myrwatchhomefixer.esp Data/
`

export { Myrwatch_EditableHomeCells }

