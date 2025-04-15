import { BoxGeometry } from 'https://unpkg.com/three@0.127.0/build/three.module.js'

function createGeometries() {
    const portraitGeometry = new BoxGeometry(3, 3, 3)

    return {
        portraitGeometry,
    }
}

export { createGeometries }