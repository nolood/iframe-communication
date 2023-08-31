import { useRef } from 'react'
import Button from 'remote/Button'
function App() {
	const refRemote = useRef()
	const refOther = useRef()
	const onClick = () => {
		refRemote.current.contentWindow.postMessage(
			{ message: true, content: 'Nice host' },
			'*'
		)
	}

	window.onmessage = event => {
		if (event.data.type === 'message' && event.data.recipient === 'remote') {
			console.log(event.data.log)
			refRemote.current.contentWindow.postMessage(
				{
					...event.data,
				},
				'*'
			)
		}
	}
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<h1>HOST</h1>
			<Button onClick={onClick}>Click me host</Button>
			<iframe
				ref={refRemote}
				src='http://localhost:5001/'
				width={300}
				height={300}
			></iframe>
			<iframe
				ref={refOther}
				src='http://localhost:4174/'
				width={300}
				height={300}
			></iframe>
		</div>
	)
}

export default App
