
import { type BuildOptions, type Derivation, mkComposition, sources, writeRunSpec  } from "@btripoloni/kintsugi";
import { Packages } from "./packages/main.ts"
import { SkyrimPackage } from "./SkyrimPackage.ts";
import { SkyrimVersions } from "./skyrim-versions/main.ts";

interface FixOptions {
  EngineFixes?: boolean
  DisplayFixes?: boolean
  USSEP?: boolean
  ScrambledBugs?: boolean
}

interface SkyrimOptions {
  SkyrimVersion: SkyrimPackage
  ModPackName: string
  Mods: SkyrimPackage[]
  skse?: boolean
  fixes: FixOptions
}

const LauncherExec:SkyrimPackage = new SkyrimPackage('SkyrimExec', '1.0.0', sources.blank_source())
LauncherExec.toShard = async () => {
  return await writeRunSpec({
    entrypoint: "SkyrimSELauncher.exe",
    name: "launcher",
    umu: {
      id: "",
      version: ""
    }
  })
}

async function Skyrim(modpackOptions: SkyrimOptions ): Promise<Derivation>{
  const skyrim_game = await modpackOptions.SkyrimVersion.toShard() //SkyrimVersions[modpackOptions.SkyrimVersion]
  const launcher = await LauncherExec.toShard()
  const composition: BuildOptions = {
    name: modpackOptions.ModPackName,
    layers: [
     skyrim_game,
     launcher
    ],
  }
  
  if (modpackOptions.skse) composition.layers.push( await Packages.skse.toShard(), await Packages.skseExec.toShard() )
  if (modpackOptions.fixes.EngineFixes) composition.layers.push( await Packages.SSEEngineFixes.toShard() )
  if (modpackOptions.fixes.DisplayFixes) composition.layers.push( await Packages.SSEDisplayFixes.toShard() )
  if (modpackOptions.fixes.ScrambledBugs) composition.layers.push( await Packages.ScrambledBugs.toShard() )
  if (modpackOptions.fixes.USSEP) composition.layers.push( await Packages.UnofficialSkyrimSpecialEditionPatch.toShard() )

  await Promise.all(modpackOptions.Mods.map(async (mod) => {
    composition.layers.push(await mod.toShard())
  }))

  return mkComposition(composition)
}

export {
  Skyrim,
  SkyrimPackage,
  SkyrimVersions,
  Packages
}