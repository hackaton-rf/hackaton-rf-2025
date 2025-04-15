import { Clock } from 'https://unpkg.com/three@0.127.0/build/three.module.js'

const clock = new Clock()

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera
        this.scene = scene
        this.renderer = renderer
        this.updatables = []
    }

    start() {
        this.renderer.setAnimationLoop( () =>{
            //tells every animated object to tick foward one frame
            this.tick()

            //render a frame
            this.renderer.render(this.scene, this.camera)
        })
    }

    stop() {
        this.renderer.setAnimationLoop(null)
    }

    tick() {
        //only call getDelta function once per frame
        const delta = clock.getDelta()

        //you can print the time the last frame was rendered in

        for (const object of this.updatables) {
            object.tick(delta)
        }
    }
}

export { Loop }