import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { skse } from "./skse.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/c4ca574f3ec11c2b24b63960683e928174a3fce3/SSE%20Display%20Tweaks-34705-0-5-16-1703410713.zip?download=",
    sha256: "08b8bc6f548cf12aa82a234166efe10851bfb994d02393f2e716754e6b3174e0",
    unpack: true
})

const SSEDisplayFixes:SkyrimPackage = new SkyrimPackage("SSEDisplayFixes", "", source)
SSEDisplayFixes.dependencies.push(skse)
SSEDisplayFixes.postBuild = `
mkdir Data
mv SKSE Data/
`

export { SSEDisplayFixes }