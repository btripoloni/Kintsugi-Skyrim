import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/Myrwatch%20-%20House%20Fix-64108-1-1-1-1658728465.7z?download=",
    sha256: "9a5b2fced0c29bd72f7478c078f4c4b2a165d2eb43452fe0c9cc27a88377cebc",
    unpack: true
})

const Myrwatch_EditableHomeCells:SkyrimPackage = new SkyrimPackage("Myrwatch_EditableHomeCells", "1.1.1", source)
Myrwatch_EditableHomeCells.postBuild = `
mkdir Data
mv myrwatchhomefixer.esp Data/
`

export { Myrwatch_EditableHomeCells }

