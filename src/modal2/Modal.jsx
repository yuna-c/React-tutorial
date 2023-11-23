import './Modal.scss';

export default function Modal({ setOpen }) {
	return (
		<aside className='modal'>
			<h1>Modal</h1>
			<button onClick={() => setOpen(false)}>close</button>
		</aside>
	);
}
