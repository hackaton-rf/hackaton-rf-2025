import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { STLLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/STLLoader.js'
import { NavBarControl } from './NavBarControl.js';

// Navbar
//create navbar controls
const navBarControl = new NavBarControl(document, window);

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

// related to the addition of the game control on the scene

//configures the render and main camera
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus);

// Pochita STL
let pochita_mesh = new THREE.Mesh(geometry, material);
const pochita_loader = new STLLoader();
pochita_loader.load(
  'assets/3d_models/pochita_resin.stl',
  function(pochita_geometry) {
    pochita_mesh = new THREE.Mesh(pochita_geometry, material);
    const sizes = {"x": 10, "y": 10, "z": -30};
    pochita_mesh.position.set(sizes.x, sizes.y, sizes.z);
    pochita_mesh.scale.set(0.5,0.5,0.5);
    // pochita_mesh.rotateX(-20);
    scene.add(pochita_mesh);
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
  },
  (error) => {
    console.log(error)
  }
)

// Method to add STL meshes
function addSTLMesh(file_name) {
  return something
}

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(300).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('./assets/image_files/pattern_blue.jpg');
scene.background = spaceTexture;

// Avatar

const portraitTexture = new THREE.TextureLoader().load('./assets/image_files/text_box_green.jpg');

const portrait = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: portraitTexture }));

scene.add(portrait);

// Moon

const moonTexture = new THREE.TextureLoader().load('./assets/image_files/text_box_blue.jpg');
const normalTexture = new THREE.TextureLoader().load('./assets/image_files/text_box_blue.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10);

portrait.position.z = -5;
portrait.position.x = 2;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  portrait.rotation.y += 0.01;
  portrait.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  pochita_mesh.rotation.x += 0.1;

  // torus.rotation.x += 0.01;
  // torus.rotation.y += 0.005;
  // torus.rotation.z += 0.01;

  moon.rotation.x += 0.005;

  // controls.update();

  renderer.render(scene, camera);
}

animate();
