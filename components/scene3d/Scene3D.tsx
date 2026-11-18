"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface Scene3DProps {
  currentStage: number; // 0: Hero, 1: Manifesto, 2: Works, 3: Contact
  celebrateTrigger?: number; // increments on form submit to trigger celebration animation
}

export function Scene3D({ currentStage, celebrateTrigger = 0 }: Scene3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef(currentStage);
  stageRef.current = currentStage;

  const celebrateRef = useRef(celebrateTrigger);
  celebrateRef.current = celebrateTrigger;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isDisposed = false;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x010103, 0.05);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 4.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0x28233d, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(3, 4, 4);
    scene.add(keyLight);

    // Kora-signature lavender rim light
    const rimLight = new THREE.DirectionalLight(0xc8c3f2, 5.0);
    rimLight.position.set(-4, 3, -3);
    scene.add(rimLight);

    const softFill = new THREE.PointLight(0xa59bd8, 2.2, 10);
    softFill.position.set(0, -2, 2);
    scene.add(softFill);

    // --- Model Group & Placeholder ---
    const characterGroup = new THREE.Group();
    scene.add(characterGroup);

    // Particles system for ambient dust & celebration
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 6;
      particleSpeeds[i] = (Math.random() - 0.5) * 0.004;
      particleSpeeds[i + 1] = Math.random() * 0.005 + 0.002;
      particleSpeeds[i + 2] = (Math.random() - 0.5) * 0.004;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xc8c3f2,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Stylized materials for placeholder mascot
    const glossyMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xd4ceff),
      emissive: new THREE.Color(0x130e26),
      roughness: 0.16,
      metalness: 0.12,
      transmission: 0.5,
      thickness: 1.4,
      ior: 1.48,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.85,
    });

    const innerCoreMaterial = new THREE.MeshStandardMaterial({
      color: 0x9b8fe3,
      emissive: 0x6e5cc9,
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.6,
    });

    const accentMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.9,
      clearcoat: 1.0,
    });

    // Build stylized placeholder sculpture
    const placeholder = new THREE.Group();

    // Main head / core
    const headGeo = new THREE.SphereGeometry(0.85, 48, 48);
    headGeo.scale(1, 1.1, 0.95);
    const head = new THREE.Mesh(headGeo, glossyMaterial);
    placeholder.add(head);

    // Inner glowing core
    const coreGeo = new THREE.IcosahedronGeometry(0.45, 2);
    const core = new THREE.Mesh(coreGeo, innerCoreMaterial);
    placeholder.add(core);

    // Stylized expressive ears / crest (Toon mascot inspiration)
    const earGeo = new THREE.CylinderGeometry(0.04, 0.18, 0.9, 32);
    earGeo.translate(0, 0.45, 0);

    const leftEar = new THREE.Mesh(earGeo, glossyMaterial);
    leftEar.position.set(-0.45, 0.65, -0.05);
    leftEar.rotation.z = 0.35;
    leftEar.rotation.x = -0.15;
    placeholder.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, glossyMaterial);
    rightEar.position.set(0.45, 0.65, -0.05);
    rightEar.rotation.z = -0.35;
    rightEar.rotation.x = -0.15;
    placeholder.add(rightEar);

    // Floating orbital rings (kinetic luxury aesthetic)
    const ringGeo = new THREE.TorusGeometry(1.28, 0.018, 16, 80);
    const orbitalRing1 = new THREE.Mesh(ringGeo, accentMaterial);
    orbitalRing1.rotation.x = Math.PI / 3;
    orbitalRing1.rotation.y = Math.PI / 6;
    placeholder.add(orbitalRing1);

    const ringGeo2 = new THREE.TorusGeometry(1.42, 0.012, 16, 80);
    const orbitalRing2 = new THREE.Mesh(ringGeo2, accentMaterial);
    orbitalRing2.rotation.x = -Math.PI / 4;
    orbitalRing2.rotation.y = -Math.PI / 5;
    placeholder.add(orbitalRing2);

    characterGroup.add(placeholder);

    // --- Try loading external GLTF model if user drops /character.glb into /public ---
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      "/character.glb",
      (gltf) => {
        if (isDisposed) return;
        // If character.glb exists, remove placeholder and mount loaded model
        characterGroup.remove(placeholder);
        const model = gltf.scene;

        // Auto-fit bounding box to normalize scale
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.0 / (maxDim || 1);
        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));

        characterGroup.add(model);
      },
      undefined,
      () => {
        // Fallback to placeholder if character.glb is not yet placed
      }
    );

    // --- Mouse & Cursor Parallax ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // --- Stage Configuration Targets ---
    // Smooth lerping positions based on active stage
    const getStageTargets = (stage: number, isMobile: boolean) => {
      if (isMobile) {
        switch (stage) {
          case 0: return { x: 0, y: 0.1, z: 0, rotY: 0, scale: 0.85, camZ: 5.2 };
          case 1: return { x: 0, y: 0.9, z: -0.4, rotY: 0.4, scale: 0.7, camZ: 5.2 };
          case 2: return { x: 0, y: 1.1, z: -0.8, rotY: -0.3, scale: 0.55, camZ: 5.2 };
          case 3: return { x: 0, y: 1.0, z: -0.3, rotY: 0.2, scale: 0.65, camZ: 5.2 };
          default: return { x: 0, y: 0, z: 0, rotY: 0, scale: 0.85, camZ: 5.2 };
        }
      }
      switch (stage) {
        case 0: // Hero: centered, prominent
          return { x: 0, y: -0.05, z: 0, rotY: 0, scale: 1.05, camZ: 4.8 };
        case 1: // Manifesto: shifted to right
          return { x: 1.55, y: -0.1, z: 0.3, rotY: -0.45, scale: 0.95, camZ: 4.8 };
        case 2: // Selected Works: accent position on left/top
          return { x: -1.75, y: 0.35, z: -0.2, rotY: 0.55, scale: 0.82, camZ: 4.8 };
        case 3: // Contact: right side floating sentinel
          return { x: 1.65, y: 0, z: 0.2, rotY: -0.3, scale: 1.0, camZ: 4.8 };
        default:
          return { x: 0, y: 0, z: 0, rotY: 0, scale: 1.0, camZ: 4.8 };
      }
    };

    // --- Render Loop ---
    let clock = new THREE.Clock();
    let lastCelebrate = celebrateRef.current;
    let celebrationPulse = 0;

    const animate = () => {
      if (isDisposed) return;
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const isMobile = window.innerWidth < 768;
      const target = getStageTargets(stageRef.current, isMobile);

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Floating / breathing animation
      const floatY = Math.sin(elapsedTime * 1.6) * 0.08;
      const floatRotX = Math.cos(elapsedTime * 1.2) * 0.04;

      // Interpolate model position
      characterGroup.position.x += (target.x - characterGroup.position.x) * 0.06;
      characterGroup.position.y += (target.y + floatY - characterGroup.position.y) * 0.06;
      characterGroup.position.z += (target.z - characterGroup.position.z) * 0.06;

      // Interpolate model scale
      const currentScale = characterGroup.scale.x;
      const nextScale = currentScale + (target.scale - currentScale) * 0.06;
      characterGroup.scale.setScalar(nextScale);

      // Interpolate model rotation (combining stage angle, mouse tilt, and gentle float)
      const targetRotX = floatRotX - mouse.y * 0.35;
      const targetRotY = target.rotY + mouse.x * 0.45;
      characterGroup.rotation.x += (targetRotX - characterGroup.rotation.x) * 0.06;
      characterGroup.rotation.y += (targetRotY - characterGroup.rotation.y) * 0.06;

      // Animate orbital rings
      orbitalRing1.rotation.z = elapsedTime * 0.35;
      orbitalRing2.rotation.z = -elapsedTime * 0.28;
      core.rotation.y = elapsedTime * 0.5;

      // Animate particles
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i + 1] += particleSpeeds[i + 1];
        if (positions[i + 1] > 4) {
          positions[i + 1] = -4;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Detect celebration trigger
      if (celebrateRef.current !== lastCelebrate) {
        lastCelebrate = celebrateRef.current;
        celebrationPulse = 1.0;
      }

      if (celebrationPulse > 0.001) {
        celebrationPulse *= 0.94;
        characterGroup.rotation.y += celebrationPulse * 0.35;
        particleMaterial.size = 0.035 + celebrationPulse * 0.06;
      } else {
        particleMaterial.size = 0.035;
      }

      // Render
      renderer.render(scene, camera);
    };

    animate();

    // Attach cleanup
    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      headGeo.dispose();
      coreGeo.dispose();
      earGeo.dispose();
      ringGeo.dispose();
      ringGeo2.dispose();
      glossyMaterial.dispose();
      innerCoreMaterial.dispose();
      accentMaterial.dispose();
    };
  }, []); // Run setup once; stage updates are handled through state refs or events below

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
