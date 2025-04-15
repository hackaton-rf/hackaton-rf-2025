import { Group, MathUtils } from 'https://unpkg.com/three@0.127.0/build/three.module.js'

import { createMeshes } from './Meshes'

const moonSpinSpeed = MathUtils.degToRad(50)

class Moon extends Group {
    constructor() {
        super()

        this.meshes = createMeshes()

        this.add( this.meshes.moon )
    }
    tick(delta) {
        this.meshes.moon.rotation.x += moonSpinSpeed * delta
    }
}

export { Moon }