import { Mesh } from 'https://unpkg.com/three@0.127.0/build/three.module.js'

import { createGeometries } from './Geometries.js'
import { createMaterials } from './Materials.js'

const geometries = createGeometries()
const materials = createMaterials()

function createMeshes() {
    const moon = new Mesh(geometries.moonGeometry, materials.moonMaterial)
    moon.position.set(-10,0,30)

    return {
        moon,
    }
}

export { createMeshes }