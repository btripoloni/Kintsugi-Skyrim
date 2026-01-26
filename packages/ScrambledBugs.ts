import { sources } from "jsr:@btripoloni/kintsugi@0.1.0";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { AddressLibraryforSKSEPlugins } from "./AddressLibraryforSKSEPlugins.ts";

const ScrambledBugs_source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/c4ca574f3ec11c2b24b63960683e928174a3fce3/Scrambled%20Bugs%20-%20Anniversary%20Edition%20(1.6.629.0%20and%20later)-43532-21-1678779028.7z?download=",
    sha256: "",
    unpack: true
})
const ScrambledBugs:SkyrimPackage = new SkyrimPackage("ScrambledBugs", "", ScrambledBugs_source)
ScrambledBugs.dependencies.push(AddressLibraryforSKSEPlugins)
ScrambledBugs.postBuild = `
mkdir Data
mv SKSE Data/
`
export { ScrambledBugs }