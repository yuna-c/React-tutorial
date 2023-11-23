import { useState } from 'react';
import Modal from './modal2/Modal';

export default function App() {
	const [Open, setOpen] = useState(false);

	return (
		<>
			<h1>parent</h1>
			<button onClick={() => setOpen(true)}>open</button>
			{Open && <Modal setOpen={setOpen} />}
			{/* setOpen이라는 함수로 setOpen이라는 prop객체를 자식으로 넘기기 위해 씀 */}
		</>
	);
}
