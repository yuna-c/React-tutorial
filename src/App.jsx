import { useRef } from 'react';
import './App.scss';

/*
useRef에서 알아야 하는 핵심정리
1. DOM 참조 객체에 담는 법
1-1. const 변수명 = useRef(null); : 돔을 담은 빈 참조 객체 생성
1-2. <div ref={변수명}></div> : 원하는 요소에 참조 객체 연결
1-3. 변수명.current.style~ : 참조 객체에 담겨있는 돔 호출

2. 모션 작업시 화면 재랜더링 하지 않으면서 수치값 변경하는 방법
2-1. const num = useRef(초기수치); 
2-2. num.current = 변경할 수치값
*/

export default function App() {
	console.log('render');
	const num = useRef(0); //쓰임1 객체 : 참조객체를 만들어 줌(자주 바뀌는 수칙값)
	const refBox = useRef(null); //쓰임2
	const deg = 45;

	console.log(num);
	console.log(refBox);

	// const minus = () => {
	// 	num.current--;
	// 	console.log(num.current);
	// 	refBox.current.style.transform = `rotate(${num.current * deg}deg)`;
	// };
	// const plus = () => {
	// 	++num.current;
	// 	console.log(num.current);
	// 	refBox.current.style.transform = `rotate(${num.current * 45}deg)`;
	// };

	const rotation = (count) => {
		refBox.current.style.transform = `rotate(${count * deg}deg)`; // 쓰임 2 리얼돔 요소를 객체로 가져와서 바꿔야 할때
	};
	return (
		<>
			<button onClick={() => rotation(--num.current)}>left</button>
			<button onClick={() => rotation(++num.current)}>right</button>
			<div ref={refBox} className='box'></div>
			{/* data 제어 기반 (앞으로 변환이 될 리얼돔 미리 참조지롱!)*/}
		</>
	);
}

/*
useState : 해당 값이 변경되면 무조건 컴포넌트 재랜더링 됨, 이전 랜더링 사이클 값 유지됨

useRef :
-- 리액트 내부적으로 기억할 수 있는 값을 담기 위한 참조객체 생성 함수
-- 쓰임1 : 모션을 위해서 자주 바뀌는 수치값을 컴포넌트를 재호출하지 않으면서 관리할 떄
-- 쓰임2 : 리얼돔 요소를 리액트 구조 안에서 선택해서 써야할 때

-- 쓰임 1에 대한 해설
: useRef를 통해서 생성한 참조 객체에 저장된 값은 다른 state변경에 의해서 컴포넌트가 재 랜더링 되더라도 이전 사이클에서의 값을 유지함
: 참조객체에 담겨있는 값을 우리 임의로 변경하더라도 해당 값의 변경은 state와 달리 컴포넌트를 재 랜더링 시키지 않음(모션)
: 화면의 정보를 담당하는 중요한 정보 값이 단지 모션을 위한 수치값 같은 덜 중요한 값들은 참조객체로 관리하는 것이 유리 

-- 쓰임 2에 대한 해설
: 리액트에서 어쩔 수 없이 realDom을 직접 가져와서 이벤트 연결 해야 하는 경우 
: 스크롤 모션 이벤트, 인풋요소 포커스 연결 이벤트
: document.querySelector를 리액트의 제어에서 벗어난 이전 랜더링 사이클에서 생성된 과거 신뢰할 수 없는 Dom을 참조
: useRef를 통한 참조객체에 담겨있는 realDom은 React에서 관리하는 신뢰할 수 있는 최신 상태의 리얼돔을 참조
: 참조객체current.querySelector 가능(최신돔) but! document객체 (이미 리액트 생성전에 만들어진 바디 요소니까 신뢰성이 떨어짐)
*/
