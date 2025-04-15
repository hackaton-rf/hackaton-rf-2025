import { Mesh } from 'https://unpkg.com/three@0.127.0/build/three.module.js'

import { createGeometries } from './Geometries.js'
import { createMaterials } from './Materials.js'

const geometries = createGeometries()
const materials = createMaterials()

function createMeshes() {
    const portrait = new Mesh(geometries.portraitGeometry, materials.portraitMaterial)
    portrait.position.set(2,0,-5)

    return {
        portrait,
    }
}

export { createMeshes }