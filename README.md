# The Skyrim module for Kintsugi.
This repository is the module and package management of Skyrim Special edition for [Kintsugi Mod Manager](https://github.com/btripoloni/Kintsugi).
Similar to Nix this repo work like a Nix Pkgs repo for Nix and NixOS, providing the code and packages needed to create a new Modlist for the game.

You can see examples of the packages work on packages folder, all the mods are stored in [here](https://github.com/btripoloni/kintsugi-temp-mods) this is temporary and only for testing, on more stable versions the packages should be downloaded using the official download links or approved repost repos.

# Important
This module is still a experiment, nothing is definitive and will change with the time, so use with caution and pay attention for the updates

# Example
Here a example of how you can create a modlist using this module.
```ts
import { sources } from "@btripoloni/kintsugi";
// deno-lint-ignore no-import-prefix
import { Skyrim, Packages, SkyrimVersions } from "jsr:@btripoloni/kintsugi-skyrim@0.1.2";

// The only version for now is 1.16.1170 (maybe it work with GOG)
// As kintsugi does not manage game files yet, create a vase with game files are necessary.
// More about the vases on Kintsugi docs.
const skyrimVerson = SkyrimVersions.SE_1_16_1170
skyrimVerson.source = sources.fetch_vase({
  vase: "example-vase"
})

export default Skyrim({
    ModPackName: "Example", // All the modlists should have a Name used for the builds
    SkyrimVersion: skyrimVerson,
    skse: true, //This import the skse by default
    fixes: {
      EngineFixes: true,
      DisplayFixes: true,
      ScrambledBugs: true,
      USSEP: true
    },
    Mods: [
        // Kintsugi is smart enough to add the dependencies to the modlist, so add them here are optional.
        Packages.SkuUIDifficultyPersistencyFix, 
        Packages.RaceMenu,
        Packages.AlternatePerspective_AlternateStart
    ]
})

```

Example of a Package:
```ts
// Import the needed libraries:
import { sources } from "@btripoloni/kintsugi";
import { SkyrimPackage, Packages } from "jsr:@btripoloni/kintsugi-skyrim@0.1.2";

// Every package need a download file or other method to obtain the mod files
// Sources provide methods that allow you to fetch the mod content from multiple locations.
// More about Sources on Kintsugi docs
const Mod_source = sources.fetch_url({
    url: "[url to download]",
    sha256: "[hash for integrity]",
    unpack: true
})

// For Kintsugi every Mod it's a Derivation, but for this module, we create Skyrim Packages instead.
// A package a class with methods and properties to create and manage packages more esily.
// More about Derivations on Kintsugi docs
const NewMod:SkyrimPackage = new SkyrimPackage("ModName", "1.0.0", Mod_source)
// Mods can have dependecies or not, Kintsugi are smart to deal with them, but you need to define them as package first.
NewMod.dependencies.push(Packages.skse) 
// As kintsugi build mod the layers from the root of the folder.
// And most part of the modders pack only the files without a propper folder structure.
// So the "postBuild" are needed to create this file structure.
NewMod.postBuild = `
mkdir Data
mv SKSE Data/
`

//Then, export your class and you have a new package ready for install.
export { NewMod }
```