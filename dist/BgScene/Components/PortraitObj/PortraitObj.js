import { Group, MathUtils } from 'https://unpkg.com/three@0.127.0/build/three.module.js'

import { createMeshes } from './Meshes'

const portraitSpinSpeed = MathUtils.degToRad(5)

class Portrait extends Group {
    constructor() {
        super()

        this.meshes = createMeshes()

        this.add( this.meshes.portrait )
    }
    tick(delta) {
        this.meshes.portrait.rotation.x += portraitSpinSpeed * delta
    }
}

export { Portrait }