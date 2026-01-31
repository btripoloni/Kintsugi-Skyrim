import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { skse } from "./skse.ts";

const ALfSKSEP_source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/All%20in%20one%20Address%20Library%20(Anniversary%20Edition)-32444-11-1707902394.zip?download=1",
    sha256: "e7009ab1cada16934ea63a21285432dbc4c891948db8bdc4f57379b493231a02",
    unpack: true
})

const AddressLibraryforSKSEPlugins:SkyrimPackage = new SkyrimPackage("AddressLibraryforSKSEPlugins", "11", ALfSKSEP_source)
AddressLibraryforSKSEPlugins.dependencies.push(skse)
AddressLibraryforSKSEPlugins.postBuild = `
mkdir Data
mv SKSE Data/
`

export { AddressLibraryforSKSEPlugins }