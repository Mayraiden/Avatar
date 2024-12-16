import { createContext, useContext, useEffect, useState } from 'react';

const backendUrl = 'http://localhost:3000';

const SpeechContext = createContext();

export const SpeechProvider = ({ children }) => {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState(null);
	const [loading, setLoading] = useState(false);

	const tts = async (message) => {
		console.log('Sending message to server:', message);

		setLoading(true);
		try {
			const response = await fetch(`${backendUrl}/tts`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ text: message }),
			});
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();

			console.log('Received response from server:', data);

			setMessages((prevMessages) => [...prevMessages, ...data.messages]);
		} catch (error) {
			console.error('Ошибка при вызове TTS:', error);
		} finally {
			setLoading(false);
		}
	};

	const onMessagePlayed = () => {
		setMessages((prevMessages) => prevMessages.slice(1));
	};

	useEffect(() => {
		if (messages.length > 0) {
			setMessage(messages[0]);
		} else {
			setMessage(null);
		}
	}, [messages]);

	return (
		<SpeechContext.Provider
			value={{
				tts,
				message,
				onMessagePlayed,
				loading,
			}}
		>
			{children}
		</SpeechContext.Provider>
	);
};

export const useSpeech = () => {
	const context = useContext(SpeechContext);
	if (!context) {
		throw new Error('useSpeech must be used within a SpeechProvider');
	}
	return context;
};
