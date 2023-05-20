import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'

const scene = new THREE.Scene();
scene.add(new THREE.AxesHelper(5))

const light = new THREE.PointLight()
light.position.set(0.8, 1.4, 1.0)
scene.add(light)

const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.set(0.8, 1.4, 1.0)

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.target.set(0, 1, 0)

const fbxLoader = new FBXLoader()
fbxLoader.load('../public/3dobject/Gabriel.fbx', (object) => {
    scene.add(object)
},
    (xhr) => {
        console.log((xhr.loded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    })

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

const stats = new Stats()
document.body.appendChild(stats.dom)

function render() {
    renderer.render(scene, camera)
}

function animate() {
    requestAnimationFrame(animate);
    controls.update()
    render();
    stats.update()
}
animate();

export default animate;
