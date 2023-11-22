import { useState } from 'react';
import './App.scss';

export default function App() {
	// state값 변경 순서에 따라 결과 화면 상이함
	console.log('render');
	const [Index, setIndex] = useState(0);

	return (
		<>
			{/* 물리적인 적용 방법 */}
			<button onClick={() => setIndex(Index - 1)}>왼쪽으로 회전</button>
			<button onClick={() => setIndex(Index + 1)}>오른쪽으로 회전</button>
			<div className='box' style={{ transform: `rotate(${45 * Index}deg)` }}></div>
		</>
	);
}
