'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface TorusKnotProps {
	position?: [number, number, number];
	size?: number;
	thickness?: number;
	segments?: [number, number];
	color?: string;
	metalness?: number;
	roughness?: number;
	wireframe?: boolean;
	rotationSpeed?: {
		x?: number;
		y?: number;
		z?: number;
	};
}

export default function TorusKnot({
	position = [0, 0, 0],
	size = 1,
	thickness = 0.4,
	segments = [128, 32],
	color = 'hotpink',
	metalness = 0.8,
	roughness = 0.2,
	wireframe = true,
	rotationSpeed = { x: 0.2, y: 0.1, z: 0 },
}: TorusKnotProps) {
	const meshRef = useRef<Mesh>(null);

	// Apply rotation on each frame
	useFrame(({ clock }) => {
		if (meshRef.current) {
			// Apply rotation based on elapsed time
			if (rotationSpeed.x) {
				meshRef.current.rotation.x =
					Math.sin(clock.getElapsedTime() * rotationSpeed.x) * 0.3;
			}
			if (rotationSpeed.y) {
				meshRef.current.rotation.y += rotationSpeed.y * 0.01;
			}
			if (rotationSpeed.z) {
				meshRef.current.rotation.z += rotationSpeed.z * 0.01;
			}
		}
	});

	return (
		<mesh ref={meshRef} position={position}>
			<torusKnotGeometry
				args={[size, thickness, segments[0], segments[1]]}
			/>
			<meshStandardMaterial
				color={color}
				metalness={metalness}
				roughness={roughness}
				wireframe={wireframe}
			/>
		</mesh>
	);
}
