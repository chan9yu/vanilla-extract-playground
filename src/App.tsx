import { useState } from 'react';

import Heading from './components/Heading';
import Message from './components/Message';
import './styles/global.css';
import { darkTheme, lightTheme } from './styles/theme.css';

export default function App() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	return (
		<div id="app" className={isDarkTheme ? darkTheme : lightTheme}>
			<Heading>Heading</Heading>
			<Message>Message</Message>
			<br />
			<button onClick={() => setIsDarkTheme(currentValue => !currentValue)}>
				Switch to {isDarkTheme ? 'light' : 'dark'} theme
			</button>
		</div>
	);
}
