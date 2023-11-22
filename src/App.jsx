import Modal from './modal/Modal';
import { useState } from 'react';

export default function App() {
	const [IsOpen, setIsOpen] = useState(false);
	// 미션2 - 버튼 클릭시 h1의 글자색 변경처리( 직접 변경할 색상을 인수로 전달 처리)

	const [Color, setColor] = useState('black');

	return (
		<>
			<h1 style={{ color: Color }}>부모 컴퍼넌트</h1>
			<button
				onClick={() => {
					setColor('hotpink');
				}}
			>
				제목 글자색 변경
			</button>
			<button
				onClick={() => {
					setIsOpen(!IsOpen);
				}}
			>
				{IsOpen ? '모달열기' : '모달닫기'}
			</button>
			{IsOpen && <Modal />}
		</>
	);
}
