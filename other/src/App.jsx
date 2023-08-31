import { useState } from 'react'

function App() {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount(prev => prev + 1)
		window.top.postMessage(
			{
				recipient: 'remote',
				content: count + 1,
				log: `Other: ${count + 1}`,
				type: 'message',
			},
			'*'
		)
	}

	return (
		<div>
			<h1>Other</h1>
			<button onClick={handleClick}>Count: {count}</button>
		</div>
	)
}

export default App
