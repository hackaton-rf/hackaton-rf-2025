import { MeshStandardMaterial, TextureLoader } from 'https://unpkg.com/three@0.127.0/build/three.module.js'

function createMaterials() {
    const portraitTexture = new TextureLoader().load('../../../assets/image_files/southern_ring_nebula.png')
    
    const portraitMaterial = new MeshStandardMaterial({
        map:portraitTexture,
    })

    return {
        portraitMaterial,
    }    
}

export { createMaterials }