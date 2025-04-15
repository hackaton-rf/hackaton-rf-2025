import { MeshStandardMaterial, TextureLoader } from 'https://unpkg.com/three@0.127.0/build/three.module.js'

function createMaterials() {
    const moonTexture = new TextureLoader().load('../../../assets/image_files/moon.jpg')
    const normalMoonTexture = new TextureLoader().load('../../../assets/image_files/normal.jpg')

    const moonMaterial = new MeshStandardMaterial({
        map:moonTexture,
        normalMap:normalMoonTexture,
    })

    return {
        moonMaterial,
    }
}

export { createMaterials }