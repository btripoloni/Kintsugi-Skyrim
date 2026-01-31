import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage } from "../SkyrimPackage.ts";
import { JContainers } from "./JContainers.ts";

const source = sources.fetch_url({
    url: "https://github.com/btripoloni/kintsugi-temp-mods/raw/refs/heads/master/Alternate%20Perspective-50307-4-1-0-1765368778.zip?download=",
    sha256: "35c8708b7c3edad79cfb257367e0d35d447c20acfc13ae90bd9602fa495b2044",
    unpack: true
})

const AlternatePerspective_AlternateStart:SkyrimPackage = new SkyrimPackage("AlternatePerspective_AlternateStart", "4.1.0", source)
AlternatePerspective_AlternateStart.dependencies.push(JContainers)

export { AlternatePerspective_AlternateStart }