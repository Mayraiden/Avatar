import { useRef } from 'react';
import * as THREE from 'three';

export const useLipsyncAndExpressions = (
	scene,
	facialExpressions,
	morphTargets
) => {
	const lerpMorphTarget = (target, value, speed = 0.1) => {
		scene.traverse((child) => {
			if (child.isSkinnedMesh && child.morphTargetDictionary) {
				const index = child.morphTargetDictionary[target];
				if (index !== undefined) {
					child.morphTargetInfluences[index] = THREE.MathUtils.lerp(
						child.morphTargetInfluences[index],
						value,
						speed
					);
				}
			}
		});
	};

	return { lerpMorphTarget };
};
