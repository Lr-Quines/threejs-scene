import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Plano - PlaneGeometry
const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x888888, side: THREE.DoubleSide }); // Customizando o plano
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI / 2;
scene.add(plane);

// BoxGeometry
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });  // Customizando o cubo
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(-3, 0.5, 0); // Translação do cubo
cube.rotation.y = Math.PI / 4; // Rotação do cubo
cube.scale.set(1, 2, 1); // Escala do cubo
scene.add(cube);

// SphereGeometry
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });  // Customizando a esfera
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 0.5, 3); // Translação da esfera
sphere.scale.set(1.5, 1.5, 1.5); // Escala da esfera
scene.add(sphere);

// ConeGeometry
const coneGeometry = new THREE.ConeGeometry(0.5, 1, 32);
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });  // Customizando o cone
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.set(3, 0.5, -2); // Translação do cone
cone.rotation.x = Math.PI / 6; // Rotação do cone
scene.add(cone);

// Configurando a câmera para que todos os objetos estejam visíveis na cena
camera.position.set(5, 5, 10);
camera.lookAt(0, 0, 0);

// OrbitControls - Adicionando controles de órbita
const controls = new OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}
animate();
