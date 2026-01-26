import { sources, writeRunSpec  } from "@btripoloni/kintsugi";
import { SE_1_16_1170 } from "../skyrim-versions/SE_1_16_1170.ts";
import { SkyrimPackage } from "../SkyrimPackage.ts";

const skse_source = sources.fetch_url({
  url: "https://skse.silverlock.org/beta/skse64_2_02_06.7z",
  sha256: "aaaaaaaaaaaaaaaaaaa",
  unpack: true
})

const skse:SkyrimPackage = new SkyrimPackage("skse", "2.2.6", skse_source)
skse.dependencies.push(SE_1_16_1170)
skse.postBuild = `
rm skse64_whatsnew.txt
rm skse64_readme.txt
rm -r src
`

const skseExec:SkyrimPackage = new SkyrimPackage('SkyrimExec', '1.0.0', sources.blank_source())
skseExec.toShard = async () => {
  return await writeRunSpec({
    entrypoint: "skse64_loader.exe",
    name: "default",
    umu: {
      id: "",
      version: ""
    }
  })
}

export { skse, skseExec }
