import { Loader, CameraControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Scenario } from './components/Scenario';
import { ChatInterface } from './components/ChatInterface';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
	return (
		<>
			<ParticlesBackground />
			<Loader />
			<Leva collapsed hidden />
			<ChatInterface />
			<Canvas shadows camera={{ fov: 10 }}>
				<Scenario />
			</Canvas>
		</>
	);
}

export default App;
