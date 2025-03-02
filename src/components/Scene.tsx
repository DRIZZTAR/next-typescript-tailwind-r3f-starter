'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function Scene() {
	return (
		<Canvas camera={{ position: [0, 1, 5] }} className='w-full h-screen'>
			{/* Lighting & Environment */}
			<Environment preset='city' />
			<ambientLight intensity={0.5} />
			<directionalLight position={[2, 5, 2]} intensity={1} />

			{/* 3D Object */}
			<mesh>
				<torusKnotGeometry args={[1, 0.4, 128, 32]} />
				<meshStandardMaterial
					color='hotpink'
					metalness={0.8}
					roughness={0.2}
				/>
			</mesh>

			{/* Controls & Effects */}
			<OrbitControls makeDefault />
			<EffectComposer>
        <Bloom mipmapBlur={false} kernelSize={5} luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} />
			</EffectComposer>
		</Canvas>
	);
}
