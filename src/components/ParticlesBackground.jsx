import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = (props) => {
	const [init, setInit] = useState(false);
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container) => {
		console.log(container);
	};

	const options = useMemo(
		() => ({
			background: {
				color: {
					value: 'transparent',
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: false,
						mode: 'repulse',
					},
					onHover: {
						enable: false,
						mode: 'grab',
					},
				},
				modes: {
					push: {
						distance: 200,
						duration: 15,
					},
					grab: {
						distance: 90,
					},
				},
			},
			particles: {
				color: {
					value: '#F5F5F5',
					opacity: 0.1,
				},
				links: {
					color: '#FFFFFF',
					distance: 150,
					enable: false,
					opacity: 0.1,
					width: 1,
				},
				move: {
					direction: 'none',
					enable: true,
					outModes: {
						default: 'split',
					},
					random: true,
					speed: 0.7,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 200,
				},
				opacity: {
					value: 0.7,
				},
				shape: {
					type: 'triangle',
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[]
	);

	return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesBackground;
