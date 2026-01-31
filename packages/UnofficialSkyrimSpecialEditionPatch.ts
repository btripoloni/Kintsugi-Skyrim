import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";

const name = "UnofficialSkyrimSpecialEditionPatch"
const version = "4.3.6c"
const patch_source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/c4ca574f3ec11c2b24b63960683e928174a3fce3/Unofficial%20Skyrim%20Special%20Edition%20Patch-266-4-3-6c-1756684569.7z?download=",
    sha256: "62a3399853f76ea29998189a2a0e99a36ca287d7be7f56333258518dbb97fdcb",
    unpack: true
})

const UnofficialSkyrimSpecialEditionPatch:SkyrimPackage = new SkyrimPackage(name, version, patch_source)
UnofficialSkyrimSpecialEditionPatch.postBuild = `
rm -r BashTags
rm -r Docs
rm "unofficial skyrim special edition patch.modgroups"
mkdir Data
mv *.eps Data/
mv *.bsa Data/
mv *.ini Data/
`
export { UnofficialSkyrimSpecialEditionPatch }