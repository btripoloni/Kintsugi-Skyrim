import { sources } from "@btripoloni/kintsugi@0.1.0";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { skse } from "./skse.ts";

const fixes_source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/c4ca574f3ec11c2b24b63960683e928174a3fce3/Engine%20Fixes%20(All-In-One)%20for%201.6.1170%20and%20newer-17230-7-0-19-AIO-1758815694.7z?download=",
    sha256: "",
    unpack: true
})
const SSEEngineFixes:SkyrimPackage = new SkyrimPackage("SSEEngineFixes", "7.0.19", fixes_source)
SSEEngineFixes.dependencies.push(skse)
SSEEngineFixes.postBuild = `
rm "SSE Engine Fixes - Install Instructions.txt"
rm "vortex_override_instructions.json"
`

export { SSEEngineFixes }