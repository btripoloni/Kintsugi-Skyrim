import { sources } from "jsr:@btripoloni/kintsugi@0.1.0";
import { SkyrimPackage } from "../SkyrimPackage.ts";

const name = "SunderandWraithguard_EditableVaultCell"
const version = "1.0"
const patch_source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/Sunder%20and%20Wraithguard%20-%20Vault%20Fix-59083-1-0-1637936330.7z?download=",
    sha256: "",
    unpack: true
})

const SunderandWraithguard_EditableVaultCell = new SkyrimPackage(name, version, patch_source)
SunderandWraithguard_EditableVaultCell.postBuild = `
mkdir Data
mv strings Data/
mv wraithguardvaultfixer.esp Data/
`
export { SunderandWraithguard_EditableVaultCell }