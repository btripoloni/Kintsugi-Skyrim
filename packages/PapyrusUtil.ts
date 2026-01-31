import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { AddressLibraryforSKSEPlugins } from "./AddressLibraryforSKSEPlugins.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/PapyrusUtil%20AE%20SE%20-%20Scripting%20Utility%20Functions-13048-4-6-1705639805.zip?download=",
    sha256: "441b3bdaf8215ac76a57a292a9ad2c3e21597eab40ba4aa39f81098494ef1e3d",
    unpack: true
})

const PapyrusUtil:SkyrimPackage = new SkyrimPackage("PapyrusUtil", "4.6", source)
PapyrusUtil.dependencies.push(AddressLibraryforSKSEPlugins)

export { PapyrusUtil }