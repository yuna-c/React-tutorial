import { useEffect, useState } from 'react';
import './Modal.scss';

export default function Modal({ setOpen }) {
	const [Num, setNum] = useState(0);

	//컴포넌트 마운트 시 한번만 실행(하나의 useEffect 안에서 쓴다 생성/소멸)
	useEffect(() => {
		console.log('Mounted');
		// window.addEventListener('resize',momaMotion); 생성

		return () => {
			console.log('UnMounted');
			// window.removeEventListener('resize',momaMotion); 제거
		};
	}, []);

	// Num state 값 변경시마다 실행
	useEffect(() => {
		console.log('numChange');
	}, [Num]);

	return (
		<aside className='modal'>
			<button className='btn' onClick={() => setOpen(false)}>
				close
			</button>
			<button onClick={() => setNum(Num - 1)}>minus</button>
			<button onClick={() => setNum(Num + 1)}>plus</button>
			<h1>{Num}</h1>
		</aside>
	);
}

/*
useEffect : 컴포넌트의 생명주기를 다루기 위한 Hook(시점알기)
useEffect(콜백함수, 의존성배열)
useEffect(()=>{
  //실행할 구문
},[])

-컴포넌트 생성(Mount)
--- useEffect의 의존성 배열이 비어있는 상태에서 입력한 콜백함수는 컴포넌트 생성시 한번만 실행됨
--- 실사례 1 - 모달창 생성시 강제로 스크롤바 제거, 검은 화면 클릭 안되게 
--- 실사례 2 - resize, scroll, mousewheel, mousemove같은 window전역객체에 직접 이벤트 연결해야하는 특정 컴포넌트 전용 함수들을 등록할 때 
--- 실사례 3(중요) - data fetching같이 반복 호출될 필요가 없는 무거운 연산 처리할 때, 해당 컴포넌트 전용으로 쓰일 외부 데이터를 한번만 fetching 할 때

-컴포넌트 변경(State Change)
--- useEffect의 의존성 배열에 특정 state 등록, 해당 state가 변경될 떄마다 실행됨

-컴포넌트 소멸(UnMount)
--- useEffect에 의존성 배열이 비어 있는 상태에서 return 함수를 내보내면 컴포넌트 소멸시 한번만 실행됨
--- 실사례 1 - 모달창 제거시 강제로 스크롤바 활성화, 검은 화면 클릭 되게 
--- 실사례 2 - window전역객체에 직접 이벤트 연결해야하는 특정 컴포넌트 전용 함수들을 제거할 때 

*/
