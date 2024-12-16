import { useEffect, useState } from 'react';

export const useBlink = () => {
	const [blink, setBlink] = useState(false);

	useEffect(() => {
		let blinkTimeout;

		const nextBlink = () => {
			blinkTimeout = setTimeout(() => {
				setBlink(true);
				setTimeout(() => {
					setBlink(false);
					nextBlink();
				}, 200);
			}, Math.random() * (5000 - 1000) + 1000);
		};

		nextBlink();
		return () => clearTimeout(blinkTimeout);
	}, []);

	return blink;
};
