import { TextureLoader, Scene } from 'https://unpkg.com/three@0.127.0/build/three.module.js'

function createScene() {
    const scene = new Scene()

    scene.background = new TextureLoader().load('./assets/image_files/space.jpg')

    return scene
}

export { createScene }