import { useControls, button } from 'leva';
import facialExpressions from '../constants/facialExpressions';

export const useAvatarControls = (
	animations,
	setAnimation,
	setFacialExpression,
	nodes,
	morphTargets,
	setSetupMode
) => {
	useControls('FacialExpressions', {
		animation: {
			value: 'Idle',
			options: animations.map((a) => a.name),
			onChange: (value) => setAnimation(value),
		},
		facialExpression: {
			options: Object.keys(facialExpressions),
			onChange: (value) => setFacialExpression(value),
		},
		setupMode: button(() => {
			setSetupMode((prev) => !prev);
		}),
		logMorphTargetValues: button(() => {
			const emotionValues = {};
			Object.values(nodes).forEach((node) => {
				if (node.morphTargetInfluences && node.morphTargetDictionary) {
					morphTargets.forEach((key) => {
						const value =
							node.morphTargetInfluences[node.morphTargetDictionary[key]];
						if (value > 0.01) {
							emotionValues[key] = value;
						}
					});
				}
			});
			console.log(JSON.stringify(emotionValues, null, 2));
		}),
	});

	useControls('MorphTarget', () =>
		Object.assign(
			{},
			...morphTargets.map((key) => ({
				[key]: {
					label: key,
					value: 0,
					min: 0,
					max: 1,
					onChange: (val) => {
						console.log(`Change morph target ${key} to ${val}`);
					},
				},
			}))
		)
	);
};
