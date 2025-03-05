'use client';

import { Canvas } from '@react-three/fiber';
import {
	OrbitControls,
	Environment,
	Float,
	Text3D,
	Stage,
} from '@react-three/drei';
import { EffectComposer, Bloom, Pixelation } from '@react-three/postprocessing';
import VercelLogo3D from './VercelLogo3d';

export default function Scene() {
	return (
		<Canvas camera={{ position: [0, 1, 5] }} className='w-full h-screen'>
			{/* Lighting & Environment */}
			<Environment preset='city' />
			<ambientLight intensity={0.5} />
			<directionalLight position={[2, 5, 2]} intensity={1} />

			{/* 3D Objects */}
			<group>
				<Stage>
					<Text3D
						font='https://threejs.org/examples/fonts/helvetiker_regular.typeface.json'
						position={[0, 0, 0]}
						scale={1}
						rotation={[0, 0, 0]}
						letterSpacing={-0.05}
						lineHeight={0.75}

					>
						Next
					</Text3D>
				</Stage>
				<Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
					<VercelLogo3D
						position={[0, -5, -50]}
						color='#ffffff'
						metalness={0.2}
						roughness={0.1}
						extrudeDepth={300.5}
						rotationSpeed={{ y: 0.1 }}
					/>
				</Float>
			</group>

			{/* Controls & Effects */}
			<OrbitControls makeDefault />
			<EffectComposer>
				<Bloom
					mipmapBlur={false}
					kernelSize={5}
					luminanceThreshold={0.2}
					luminanceSmoothing={0.9}
					intensity={1.5}
				/>
				<Pixelation granularity={5} />
			</EffectComposer>
		</Canvas>
	);
}
