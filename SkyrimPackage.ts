import { mkShard, Derivation, Source  } from "@btripoloni/kintsugi@0.1.0";


export class SkyrimPackage {
  name:string
  version:string
  dependencies: SkyrimPackage[] = []
  source: Source;
  postBuild: string | undefined
  
  constructor(name: string, version:string, source: Source){
    this.name = name
    this.version = version
    this.source = source
  }

  toShard(): Promise<Derivation>{
    const shard: Omit<Derivation, "out"> = {
      name: this.name,
      version: this.version,
      src: this.source as Source,
    }

    // pos processamento
    if (this.postBuild) shard.postbuild = this.postBuild
    if (this.dependencies.length > 0) {
      const dependencies: Derivation[] = []
      this.dependencies.map( async (mod) => {
        const shard = await mod.toShard()
        dependencies.push(shard)
      })
      shard.deps = dependencies
    }

    return mkShard(shard)
  }
}