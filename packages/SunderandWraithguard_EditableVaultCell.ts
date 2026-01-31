import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";

const name = "SunderandWraithguard_EditableVaultCell"
const version = "1.0"
const patch_source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/Sunder%20and%20Wraithguard%20-%20Vault%20Fix-59083-1-0-1637936330.7z?download=",
    sha256: "0762d016d6e470e771440b0312d6168e586d35f10f39fa1ebaad90eb1db8a90c",
    unpack: true
})

const SunderandWraithguard_EditableVaultCell:SkyrimPackage = new SkyrimPackage(name, version, patch_source)
SunderandWraithguard_EditableVaultCell.postBuild = `
mkdir Data
mv strings Data/
mv wraithguardvaultfixer.esp Data/
`
export { SunderandWraithguard_EditableVaultCell }