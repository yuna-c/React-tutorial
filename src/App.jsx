import Modal from './modal/Modal';
import { useState } from 'react';

export default function App() {
	const [IsOpen, setIsOpen] = useState(false);
	// 미션2 - 버튼 클릭시 h1의 글자색 변경처리(직접 변경할 색상을 인수로 전달 처리)
	const [Color, setColor] = useState('black');
	// 미션3 - 아래 초기 state배열 값 바탕으로 동적 버튼 생성과 동시에 이벤트 바인딩
	// 자주 쓰는 패턴 (정보값을 토대로 반복 가상돔 생성)
	// 1.return 안쪽에서 {}생성
	/*
	2. 중괄호 안쪽에서 배열 State.map((반복데이터,순서)=>{
		return <JSX>{활용할 값}</JSX>
	})
	*/
	const [DbColors, setDbColors] = useState(['hotpink', 'red', 'aqua', 'orange', 'violet']);

	return (
		<>
			<div>
				<h1 style={{ color: Color }}>부모 컴퍼넌트</h1>
				{/* 
				<button
					onClick={() => {
						setColor('hotpink');
					}}
				>
					hotpink
				</button> 
				*/}

				{DbColors.map((data, idx) => {
					return (
						<button
							key={data + idx}
							onClick={() => {
								setColor(data);
							}}
						>
							{data}버튼
						</button>
					);
				})}
			</div>

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
