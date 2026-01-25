// deno-lint-ignore no-import-prefix
import { BuildOptions, mkComposition  } from "jsr:@btripoloni/kintsugi@0.1.0";
import { Packages } from "./packages/main.ts"
import { SkyrimPackage } from "./SkyrimPackage.ts";

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

export async function Skyrim(modpackOptions: SkyrimOptions ){
  const skyrim_game = await modpackOptions.SkyrimVersion.toShard() //SkyrimVersions[modpackOptions.SkyrimVersion]
  
  const composition: BuildOptions = {
    name: modpackOptions.ModPackName,
    layers: [
     skyrim_game
    ],
  }
  
  if (modpackOptions.skse) composition.layers.push( await Packages.skse.toShard(), await Packages.skseExec.toShard() )
  if (modpackOptions.fixes.EngineFixes) composition.layers.push( await Packages.SSEEngineFixes.toShard() )
  if (modpackOptions.fixes.DisplayFixes) composition.layers.push( await Packages.SSEDisplayFixes.toShard() )
  if (modpackOptions.fixes.ScrambledBugs) composition.layers.push( await Packages.ScrambledBugs.toShard() )
  if (modpackOptions.fixes.USSEP) composition.layers.push( await Packages.UnofficialSkyrimSpecialEditionPatch.toShard() )

  modpackOptions.Mods.map(async (mod) => {
    composition.layers.push(await mod.toShard())  
  })

  return mkComposition(composition)
}