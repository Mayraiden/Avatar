import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SpeechProvider } from './hooks/useSpeech'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<SpeechProvider>
			<App />
		</SpeechProvider>
	</StrictMode>
)
