import { useState } from 'react'
import Button from './components/Button'
function App() {
	const [state, setState] = useState({})
	const message = () => {
		window.top.postMessage({ message: true, content: 'Nice remote' }, '*')
	}

	window.onmessage = event => {
		if (event.data.type === 'message' && event.data.recipient === 'remote') {
			setState(event.data)
		}
	}

	return (
		<div>
			<h1>REMOTE</h1>
			<Button onClick={message}>Click me remote</Button>
			<h2>Count: {state.content}</h2>
		</div>
	)
}

export default App
