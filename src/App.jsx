import { useState } from 'react';

export default function App() {
	console.log('re-render');
	// 해당 경우 : 이벤트 발생시 state의 정보값 변경이 아닌
	// 일반 변수의 값을 변경하고 있기 때문에
	// 리액트 입장에서는 해당 내용의 변경 사항을 중요하게 인식하지 않아서 컴포넌트 재호출(re-render)하지 않음
	// 위와 같은 직접 변수값을 변경하는 경우 화면의 변경은 일어나지만 이 변경 사항은 리액트의 제어에서 벗어난 일반적인 DOM의 구조가 변경되는 것 뿐 (document.querySelector)
	// 굳이 번거롭게 일반 변수가 아닌 state라는 것만 가지고 화면을 제어하도록 강제하는 이유 (모션)
	//let num = 0; // 초기화가 안된다는 말 (button0++가 됨)

	const [Num, setNum] = useState(0);

	const changeButton = (e, txt) => {
		setNum(Num + 1);
		e.target.innerText = txt + Num;
		//e.target.innerText = txt + Num++; 리액트 함수안에 지역변수 안돼, 중요한 정보라고 인식 못해
	};

	return (
		<>
			<section>
				<button onClick={(e) => changeButton(e, 'button')}>버튼</button>
			</section>
		</>
	);
}
/*
	리액트에서 re-render, re-paint
	re-render : 해당 컴포넌트 재호출
	re-paint : 컴포넌트 재 호출시 화면 출력의 변화를 담당하는 중요한 정보 값을 인지시 화면을 다시 그리면서 DOM구조 바꾸는 행위

	리액트에서 re-paint를 발생시키면서 실제 변경된 구조를 인식하기 위한 경우는 다음과 같음
	1. 물리적으로 DOM의 구조 변경
	2. 무조건 State를 통해서 값이 변경되야 함

	리액트에서 re-render 발생시키면서 실제 다음의 2경우에만 발생
	1. state라는 정보값이 변경되거나
	2. 물리적으로 JSX의 구조가 변경되거나
*/
