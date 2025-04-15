import { SphereGeometry } from 'https://unpkg.com/three@0.127.0/build/three.module.js'

function createGeometries() {
    const moonGeometry = new SphereGeometry(3, 32, 32)

    return {
        moonGeometry,
    }
}

export { createGeometries }