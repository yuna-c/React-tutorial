import { useEffect } from 'react';
import './Modal.scss';

export default function Modal({ setOpen }) {
	useEffect(() => {
		// 모달창 생성시 스크롤 기능 제거
		document.body.style.overflow = 'hidden';
		return () => {
			// 모달창 제거시 스크롤 기능 생성
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<aside className='modal'>
			<button className='btn' onClick={() => setOpen(false)}>
				close
			</button>
		</aside>
	);
}
