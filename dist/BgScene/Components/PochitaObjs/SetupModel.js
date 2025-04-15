import { AnimationClip, AnimationMixer } from 'https://unpkg.com/three@0.127.0/build/three.module.js'

function setupModel(data) {
    const model = data.scene.children[0]
  
    const rotationKF = null
    const opacityKF = null
    const rotationBlinkClip = new AnimationClip(
      'rotate-n-blink', -1, [rotationKF, opacityKF]
    )
    //TODO: separate each Main Obj so each has it's own animation, as if done 
    // like this as with the birds, all the main objs will have the same animation.
    // On the book, as all the birds use their own animation stored in the bird model
    // file itself, they don't need to be separated, as all of them will add their animation
    // the same way, but as we are using some raw animation to the objs in the scene, we
    // need them separated. This SetupModel would be the pochita, but moon do have it's animation too
    const mixer = new AnimationMixer(model)
    const action = mixer.clipAction()

    return model
  }
  
  export { setupModel }