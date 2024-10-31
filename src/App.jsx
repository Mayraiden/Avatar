import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import { Scenario } from './components/Scenario'
import { ChatInterface } from './components/ChatInterface'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
	return (
		<>
			<ParticlesBackground id="particles" />
			<Loader />
			<Leva collapsed hidden />
			<ChatInterface />
			<Canvas shadows camera={{ position: [0, 0, 0], fov: 10 }}>
				<Scenario />
			</Canvas>
		</>
	)
}

export default App
