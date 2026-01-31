import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { SkyUI } from "./SkyUI.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/SkyUI%20SE%20-%20Difficulty%20Persistence%20Fix-106418-1-0-1701983798.zip?download=1",
    sha256: "d99c5ba185ff812f1faa6f96e4221ef898814a8105f7cfa3caa9bd3e4e95bbca",
    unpack: true
})

const SkuUIDifficultyPersistencyFix:SkyrimPackage = new SkyrimPackage("SkuUIDifficultyPersistencyFix", "1.0", source)
SkuUIDifficultyPersistencyFix.dependencies.push(SkyUI)
SkuUIDifficultyPersistencyFix.postBuild = `
mkdir Data
mv interface Data/
`

export { SkuUIDifficultyPersistencyFix }