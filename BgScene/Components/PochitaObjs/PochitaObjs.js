import { STLLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/STLLoader.js'

import { setupModel } from './SetupModel.js'

async function loadMainObjs() {
    const loader = new STLLoader()

    const [pochitaData, pochitaCordData] = await Promise.all([
        loader.loadAsync('../../../assets/3d_models/pochita_resin.stl'),
        loader.loadAsync('../../../assets/3d_models/cord_resin.stl'),
    ])

    console.log('BWUUUUUUUM', pochita)

    const pochita = setupModel(pochitaData)
    pochita.position.set(10, 10, -30)
    pochita.scale.set(0.5,0.5,0.5)

    const pochitaCord = setupModel(pochitaCordData)
    pochita.position.set(10, 10, -40)
    pochita.scale.set(0.5,0.5,0.5)

    return {
        pochita,
        pochitaCord,
    }
}

export { loadMainObjs }