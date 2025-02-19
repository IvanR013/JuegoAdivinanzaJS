// Crear la escena
const scene = new THREE.Scene();

// Crear la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Crear el renderizador y asignar el canvas
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('background-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1); // Ajuste del color de limpieza

// Crear geometría y material para el fondo animado
const geometry = new THREE.PlaneGeometry(2, 2, 1, 1);
const material = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 1.0 }
  },
  vertexShader: `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    varying vec2 vUv;

    void main() {
      float t = mod(time * 0.1, 1.0); // Ajustar la velocidad de la animación
      vec3 color1 = vec3(1.0, 0.85, 0.73); // peachpuff
      vec3 color2 = vec3(0.87, 0.72, 0.55); // burlywood
      vec3 color3 = vec3(1.0, 0.776, 0.459); // color distinto
      
      // Mezcla color1 y color2
      vec3 mixedColor = mix(color1, color2, t);

      // Mezcla el color resultante con color3
      vec3 finalColor = mix(mixedColor, color3, t);

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
});
const backgroundMesh = new THREE.Mesh(geometry, material);

// Añadir la malla del fondo a la escena
scene.add(backgroundMesh);

// Posicionar la cámara para que mire hacia la geometría del fondo
camera.position.z = 1;

// Ajustar el tamaño del renderizador al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Función de animación
function animate() {
  requestAnimationFrame(animate);

  // Actualizar el uniforme de tiempo para animar el shader
  material.uniforms.time.value += 0.01;

  renderer.render(scene, camera);
}
animate();
