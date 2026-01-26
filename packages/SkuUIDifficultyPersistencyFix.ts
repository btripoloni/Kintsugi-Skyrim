import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { SkyUI } from "./SkyUI.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/SkyUI%20SE%20-%20Difficulty%20Persistence%20Fix-106418-1-0-1701983798.zip?download=",
    sha256: "",
    unpack: true
})

const SkuUIDifficultyPersistencyFix:SkyrimPackage = new SkyrimPackage("SkuUIDifficultyPersistencyFix", "1.0", source)
SkuUIDifficultyPersistencyFix.dependencies.push(SkyUI)
SkuUIDifficultyPersistencyFix.postBuild = `
mkdir Data
mv interface Data/
`

export { SkuUIDifficultyPersistencyFix }