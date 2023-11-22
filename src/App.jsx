import { useState } from 'react';

/*
	State가 변경 및 반영되는 시점
	1. 이벤트 발생시 state 변경 함수로 변경될 때 해당 랜더링 사이클에서 변경됨
	2. 변경된 state값이 실제 DOM에 반영되는 사이클은 그 다음번 렌더링 사이클
*/
export default function App() {
	console.log('render');
	const [Txt, setTxt] = useState('old');

	/*
	위 로직 실행 순서
	1. state값 초기화(render1)
	2. 버튼 클릭시 state값 변경은 되지만 실제 반영되진 않음(render1)
	3. 리액트 내부적으로 state값 변경을 인지해서 컴포넌트 재실행
	4. 이전 렌더링 사이클 변경된 state값이 실제 반영됨(render2)
	*/
	return (
		<>
			<h1>{Txt}</h1>
			<button
				onClick={() => {
					setTxt('new');
					console.log(Txt);
				}}
			>
				글자변경
			</button>
		</>
	);
}
