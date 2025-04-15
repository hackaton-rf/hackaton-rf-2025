import { OrbitControls } from 'https://unpkg.com/three@0.127.0/build/three.module.js'

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas)

    controls.enableDamping = true

    //forwards constrols.update to our custom .tick method
    controls.tick = () => controls.update()

    return controls
}

export { createControls }