'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Shape, ExtrudeGeometry, Vector3, DoubleSide, CubicBezierCurve, QuadraticBezierCurve } from 'three';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';

interface VercelLogo3DProps {
	position?: [number, number, number];
	scale?: number;
	extrudeDepth?: number;
	color?: string;
	metalness?: number;
	roughness?: number;
	rotationSpeed?: {
		x?: number;
		y?: number;
		z?: number;
	};
}

export default function VercelLogo3D({
	position = [0, 0, 0],
	scale = 0.03, // Adjust scale as needed
	extrudeDepth = 0.5,
	color = '#ffffff',
	metalness = 0.9,
	roughness = 0.1,
	rotationSpeed = { x: 0, y: 0.5, z: 0 },
}: VercelLogo3DProps) {
	const meshRef = useRef<Mesh>(null);
	const [geometry, setGeometry] = useState<ExtrudeGeometry | null>(null);

	// Load and process the SVG
	useEffect(() => {
		async function loadSVG() {
			try {
				// Load the SVG file
				const response = await fetch('/vercel.svg');
				const svgText = await response.text();

				// Parse the SVG using SVGLoader
				const loader = new SVGLoader();
				const svgData = loader.parse(svgText);

				// Process the paths from the SVG
				const shapes: Shape[] = [];
				svgData.paths.forEach(path => {
					const shape = new Shape();

					// Move to starting point
					if (
						path.subPaths.length > 0 &&
						path.subPaths[0].curves.length > 0
					) {
						const startPoint =
							path.subPaths[0].curves[0].getPoint(0);
						shape.moveTo(startPoint.x, -startPoint.y); // Note: Y is flipped in SVG vs Three.js

						// Add all curves
						path.subPaths.forEach(subPath => {
							subPath.curves.forEach(curve => {
								if (curve.type === 'LineCurve') {
									const point = curve.getPoint(1);
									shape.lineTo(point.x, -point.y);
								} else if (curve.type === 'QuadraticCurve') {
									// Cast to QuadraticBezierCurve
									const quadCurve = curve as QuadraticBezierCurve;
									const cp = quadCurve.v1;
									const end = quadCurve.v2;
									shape.quadraticCurveTo(
										cp.x,
										-cp.y,
										end.x,
										-end.y
									);
								} else if (curve.type === 'CubicCurve') {
									// Cast to CubicBezierCurve
									const cubicCurve = curve as CubicBezierCurve;
									const cp1 = cubicCurve.v1;
									const cp2 = cubicCurve.v2;
									const end = cubicCurve.v3;
									shape.bezierCurveTo(
										cp1.x,
										-cp1.y,
										cp2.x,
										-cp2.y,
										end.x,
										-end.y
									);
								}
							});
						});

						shape.closePath();
						shapes.push(shape);
					}
				});

				// Create the extrude geometry
				if (shapes.length > 0) {
					const extrudeSettings = {
						depth: extrudeDepth,
						bevelEnabled: true,
						bevelThickness: 0.05,
						bevelSize: 0.05,
						bevelSegments: 3,
					};

					const newGeometry = new ExtrudeGeometry(
						shapes,
						extrudeSettings
					);

					// Center the geometry
					newGeometry.computeBoundingBox();
					const center = newGeometry.boundingBox!.getCenter(
						new Vector3()
					);
					newGeometry.translate(
						-center.x,
						-center.y,
						-extrudeDepth / 2
					);

					setGeometry(newGeometry);
				}
			} catch (error) {
				console.error('Error loading or processing SVG:', error);
			}
		}

		loadSVG();
	}, [extrudeDepth]);

	// Apply rotation on each frame
	useFrame(() => {
		if (meshRef.current) {
			// Apply rotation based on elapsed time
			if (rotationSpeed.x) {
				meshRef.current.rotation.x += rotationSpeed.x * 0.01;
			}
			if (rotationSpeed.y) {
				meshRef.current.rotation.y += rotationSpeed.y * 0.01;
			}
			if (rotationSpeed.z) {
				meshRef.current.rotation.z += rotationSpeed.z * 0.01;
			}
		}
	});

	if (!geometry) {
		return null; // Return nothing while loading
	}

	return (
		<mesh
			ref={meshRef}
			position={position}
			scale={scale}
			geometry={geometry}
		>
			<meshStandardMaterial
				color={color}
				metalness={metalness}
				roughness={roughness}
				side={DoubleSide}
			/>
		</mesh>
	);
}
