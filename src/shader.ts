import { Transform3D } from "./transform"
import { MeshData } from "./data"
import { MetallicRoughnessMaterial } from "./material"

export interface Shader extends PIXI.Shader {
  material: MetallicRoughnessMaterial | undefined
  transform: Transform3D | undefined
  createGeometry(data: MeshData): PIXI.Geometry
}