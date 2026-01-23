import { AddressLibraryforSKSEPlugins } from "./AddressLibraryforSKSEPlugins.ts";
import { Myrwatch_EditableHomeCells } from "./Myrwatch_EditableHomeCells.ts";
import { PapyrusTweaks } from "./PapyrusUtils.ts";
import { ScrambledBugs } from "./ScrambledBugs.ts";
import { skse, skseExec } from "./skse.ts";
import { SkuUIDifficultyPersistencyFix } from "./SkuUIDifficultyPersistencyFix.ts";
import { SkyUI } from "./SkyUI.ts";
import { SSEDisplayFixes } from "./SSEDisplayFixes.ts";
import { SSEEngineFixes } from "./SSEEngineFixes.ts";
import { UnofficialSkyrimSpecialEditionPatch } from "./UnofficialSkyrimSpecialEditionPatch.ts";

export const packages = {
    skse,
    skseExec,
    AddressLibraryforSKSEPlugins,
    SkyUI,
    SkuUIDifficultyPersistencyFix,
    SSEEngineFixes,
    SSEDisplayFixes,
    UnofficialSkyrimSpecialEditionPatch,
    ScrambledBugs,
    PapyrusTweaks,
    Myrwatch_EditableHomeCells
}