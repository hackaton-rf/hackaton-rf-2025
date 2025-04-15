import { PerspectiveCamera } from 'https://unpkg.com/three@0.127.0/build/three.module.js';


function createCamera() {
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    camera.position.set(-3, 0, 30)

    return camera
}

export {createCamera};