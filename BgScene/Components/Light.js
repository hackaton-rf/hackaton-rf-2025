import { HemisphereLight, PointLight, AmbientLight, DirectionalLight } from 'https://unpkg.com/three@0.127.0/build/three.module.js'

function createLight() {
    // TODO: Lights made in the book, will test it
    // const ambientLight = HemisphereLight(
    //     'white', 'darklategrey', 5
    // )

    // const mainLight = new DirectionalLight('white', 4)

    const mainLight = new PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);
    
    const ambientLight = new AmbientLight(0xffffff);

    mainLight.position.set(10, 10, 10)

    return { ambientLight, mainLight }
}

export { createLight }