import { useState } from 'react';
import './App.scss';

/*
	state관련 주의사항
	1. state값 변경시 해당값을 무조건 다음 렌더링 사이클에 반영됨
	2. 위의 특성에 기인하여 특정 숫자값을 증감시킬 때 후위 증감연산자 사용 지양
*/

export default function App() {
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
