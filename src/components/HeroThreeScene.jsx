import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x6d1556, 2.5));
    const keyLight = new THREE.DirectionalLight(0xc7e9ff, 4);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const group = new THREE.Group();
    const core = new THREE.Mesh(new THREE.DodecahedronGeometry(1.05, 0), new THREE.MeshStandardMaterial({ color: 0xa10661, roughness: 0.28, metalness: 0.3, flatShading: true }));
    const innerCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.52, 1), new THREE.MeshStandardMaterial({ color: 0x71c8ff, roughness: 0.18, metalness: 0.65, wireframe: true }));
    const orbitMaterial = new THREE.MeshStandardMaterial({ color: 0x2498f2, roughness: 0.22, metalness: 0.75 });
    const orbit = new THREE.Mesh(new THREE.TorusGeometry(1.52, 0.035, 10, 80), orbitMaterial);
    const orbitTwo = new THREE.Mesh(new THREE.TorusGeometry(1.34, 0.025, 10, 80), orbitMaterial.clone());
    orbit.rotation.set(Math.PI * 0.38, Math.PI * 0.22, 0);
    orbitTwo.rotation.set(Math.PI * 0.7, Math.PI * -0.22, Math.PI * 0.2);
    group.add(core, innerCore, orbit, orbitTwo);
    const dotGeometry = new THREE.BufferGeometry();
    const dots = new Float32Array(90);
    for (let index = 0; index < dots.length; index += 3) { dots[index] = (Math.random() - 0.5) * 5; dots[index + 1] = (Math.random() - 0.5) * 5; dots[index + 2] = (Math.random() - 0.5) * 2; }
    dotGeometry.setAttribute('position', new THREE.BufferAttribute(dots, 3));
    const particles = new THREE.Points(dotGeometry, new THREE.PointsMaterial({ color: 0x61b8ff, size: 0.045, transparent: true, opacity: 0.8 }));
    scene.add(group, particles);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: 0, y: 0 };
    let boost = 0;
    const onPointerMove = (event) => {
      const bounds = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };
    const onPointerLeave = () => { pointer.x = 0; pointer.y = 0; };
    const onPointerDown = () => { boost = 1; };
    mount.addEventListener('pointermove', onPointerMove, { passive: true });
    mount.addEventListener('pointerleave', onPointerLeave);
    mount.addEventListener('pointerdown', onPointerDown);
    const resize = () => { const { width, height } = mount.getBoundingClientRect(); renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix(); };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();
    let frame;
    const render = (time = 0) => {
      group.rotation.y += (pointer.x * 0.3 - group.rotation.y) * 0.025;
      group.rotation.x += (-pointer.y * 0.2 - group.rotation.x) * 0.025;
      if (!reducedMotion) {
        const spin = 0.008 + boost * 0.045;
        core.rotation.y += spin;
        innerCore.rotation.x -= spin * 1.5;
        orbit.rotation.z += spin * 0.75;
        orbitTwo.rotation.z -= spin * 0.55;
        particles.rotation.z = time * 0.00008;
        boost *= 0.94;
      }
      renderer.render(scene, camera);
      if (!reducedMotion) frame = requestAnimationFrame(render);
    };
    render();
    return () => { cancelAnimationFrame(frame); resizeObserver.disconnect(); mount.removeEventListener('pointermove', onPointerMove); mount.removeEventListener('pointerleave', onPointerLeave); mount.removeEventListener('pointerdown', onPointerDown); core.geometry.dispose(); core.material.dispose(); innerCore.geometry.dispose(); innerCore.material.dispose(); orbit.geometry.dispose(); orbit.material.dispose(); orbitTwo.geometry.dispose(); orbitTwo.material.dispose(); dotGeometry.dispose(); particles.material.dispose(); renderer.dispose(); mount.removeChild(renderer.domElement); };
  }, []);

  return <div className="hero-three-scene" ref={mountRef} role="img" aria-label="Interactive 3D technology orbit. Move or tap it to change its motion." />;
}
