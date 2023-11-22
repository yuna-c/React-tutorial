import { useState } from 'react';
import './App.scss';

export default function App() {
	// state값 변경 순서에 따라 결과 화면 상이함
	console.log('render');
	let [Index, setIndex] = useState(0);

	return (
		<>
			<button onClick={() => setIndex(--Index)}>왼쪽으로 회전</button>
			{/* 전위 연산자에서는 바뀐 값으로 먼저 적용이 되어 있기 때문에 한번에 동작이 되고 후위연산자일 경우에는 console.log(num++)라고 값을 저장해도 다음번 호출때 값이 바뀌는 것을 기억하세욤! render 호출 아까 색 바꿀 때 안됬을 때를 생각하세요! */}
			<button onClick={() => setIndex(++Index)}>오른쪽으로 회전</button>
			<div className='box' style={{ transform: `rotate(${45 * Index}deg)` }}></div>
		</>
	);
}
