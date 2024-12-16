import { CameraControls, Environment, OrbitControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Avatar } from './Avatar';

export const Scenario = () => {
	const cameraControls = useRef();

	useEffect(() => {
		if (cameraControls.current) {
			cameraControls.current.enabled = true;
			cameraControls.current.setLookAt(0.5, 1.2, 5, 0.03, 1.55, 0.5, false);

			setTimeout(() => {
				cameraControls.current.enabled = false;
			}, 1);
		}
	}, []);

	return (
		<>
			<CameraControls ref={cameraControls} />
			<Environment files="/environment/sun_down.hdr" />
			<directionalLight position={[5, 5, 5]} intensity={0.5} />
			<ambientLight intensity={0.1} />
			<Avatar />
		</>
	);
};
