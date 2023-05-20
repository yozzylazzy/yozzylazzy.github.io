import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'

const scene = new THREE.Scene();
scene.add(new THREE.AxesHelper(5))

const light = new THREE.PointLight()
light.position.set(0.8, 1.4, 3.0)
scene.add(light)

const ambientLight = new THREE.HemisphereLight()
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

const geometry2 = new THREE.RingGeometry(1.7, 2, 100);
const material2 = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
const ringError = new THREE.Mesh(geometry2, material2);

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.target.set(0, 1, 0)

const model = new Promise((res, rej) => {
    const fbxLoader = new FBXLoader()
    fbxLoader.load('../src/3d/unitychan.fbx', (object) => {
        object.scale.set(0.8, 0.8, 0.8)
        object.position.set(0, 0, 0)
        scene.add(object)
        res(object)
    },
        (xhr) => {
            console.log((xhr.loded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
            scene.add(ringError)
            rej(error)
        })
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
    model.then((object) => {
        ringError.visible = false
        scene.add(object)
    })
    requestAnimationFrame(animate);
    controls.update()
    render();
    stats.update()
    cube.rotation.x += 0.05;
    ringError.rotation.x -= 0.05;
}
animate();

export default animate;
