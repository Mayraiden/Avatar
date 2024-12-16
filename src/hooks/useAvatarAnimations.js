import { useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

export const useAvatarAnimations = (
	animations,
	group,
	defaultAnimation = 'Idle'
) => {
	const { actions, mixer } = useAnimations(animations, group);

	const setAnimation = (animationName) => {
		if (actions[animationName]) {
			actions[animationName]
				.reset()
				.fadeIn(mixer.stats?.actions?.inUse === 0 ? 0 : 0.5)
				.play();
			return () => actions[animationName]?.fadeOut(0.5);
		}
	};

	useEffect(() => {
		setAnimation(defaultAnimation);
	}, [defaultAnimation]);

	return { setAnimation };
};
