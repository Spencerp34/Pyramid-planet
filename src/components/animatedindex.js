import './index.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30)
camera.position.setY(20)
camera.position.setX(5)

renderer.render(scene, camera)

const tetrahedron = new THREE.TetrahedronGeometry(10, 0)
const pyramidTexture = new THREE.TextureLoader().load('./Brick_Wall_017_normal.jpg');
const planetMaterial = new THREE.MeshStandardMaterial({color: 0xE7A522, normalMap: pyramidTexture })
const planet = new THREE.Mesh(tetrahedron, planetMaterial)


const disk1 =new THREE.RingGeometry(12, 15, 32)
const ringsMaterial1 = new THREE.MeshStandardMaterial({color: 0x423C30 })
const innerRing = new THREE.Mesh(disk1, ringsMaterial1)

const disk2 =new THREE.RingGeometry(12, 15, 32)
const ringsMaterial2 = new THREE.MeshStandardMaterial({color: 0x423C30 })
const outerRing = new THREE.Mesh(disk2, ringsMaterial2)


planet.position.y = 10
planet.position.x = -25
planet.rotateX(0.8)

innerRing.position.y = 12
innerRing.position.x = -25
innerRing.rotateX(-1.65)

outerRing.position.y = 12
outerRing.position.x = -25
outerRing.rotateX(1.75)

scene.add(planet, innerRing, outerRing)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff)

scene.add(pointLight, ambientLight)

const controls = new OrbitControls(camera, renderer.domElement)


function addStar(){
  const starShape = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff})
  const star = new THREE.Mesh( starShape, material)

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))
  star.position.set(x, y, z);
  scene.add(star)
}

Array(200).fill().forEach(addStar)


const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

function animate(){
  requestAnimationFrame( animate) 

  planet.rotation.y += 0.01;

  controls.update();

  renderer.render( scene, camera )
}

export default animate