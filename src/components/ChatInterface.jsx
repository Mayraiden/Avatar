import { useRef } from 'react';
import { useSpeech } from '../hooks/useSpeech';
import '../index.css';

export const ChatInterface = ({ hidden, ...props }) => {
	const input = useRef();
	const { tts, loading, message } = useSpeech();

	const sendMessage = () => {
		const text = input.current.value;
		if (!loading && !message) {
			tts(text);
			input.current.value = '';
		}
	};

	if (hidden) {
		return null;
	}

	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-between p-4 flex-col pointer-events-none">
			<div className="self-start rounded-lg outline outline-1 outline-green-600 text-white/80 bg-black bg-opacity-50 p-6 select-none">
				<p>
					{loading ? 'Подождите...' : 'Это ваш помощник, напишите что-нибудь.'}
				</p>
			</div>
			<div className="w-full flex flex-col items-end justify-center gap-4"></div>
			<div className="flex items-center gap-2 pointer-events-auto max-w-screen-sm w-full mx-auto">
				<input
					className="w-full placeholder:text-white/70 placeholder:italic p-4 rounded-md bg-opacity-20 bg-black backdrop-blur-md outline outline-1 outline-green-600 text-white focus:outline-dashed focus:outline-2"
					placeholder="Напишите что-нибудь..."
					ref={input}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							sendMessage();
						}
					}}
				/>
				<button
					disabled={loading || message}
					onClick={sendMessage}
					className={`select-none bg-transparent transition duration-200 outline outline-1 outline-green-500 hover:bg-black hover:outline-dashed hover:outline-2 text-white p-4 px-10 font-semibold uppercase rounded-md ${
						loading || message ? 'cursor-not-allowed opacity-30' : ''
					}`}
				>
					Отправить
				</button>
			</div>
		</div>
	);
};
