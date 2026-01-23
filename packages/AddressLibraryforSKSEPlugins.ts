import { sources } from "jsr:@btripoloni/kintsugi@0.1.0";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { skse } from "./skse.ts";

const ALfSKSEP_source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/All%20in%20one%20Address%20Library%20(Anniversary%20Edition)-32444-11-1707902394.zip?download=1",
    sha256: "AAAAAAA",
    unpack: true
})

const AddressLibraryforSKSEPlugins = new SkyrimPackage("AddressLibraryforSKSEPlugins", "11", ALfSKSEP_source)
AddressLibraryforSKSEPlugins.dependencies.push(skse)
AddressLibraryforSKSEPlugins.postBuild = `
mkdir Data
mv SKSE Data/
`

export { AddressLibraryforSKSEPlugins }