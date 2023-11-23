import { useEffect, useState } from 'react';
import './Modal.scss';

export default function Modal({ setOpen }) {
	const [Num, setNum] = useState(0);

	//컴포넌트 마운트 시 한번만 실행(하나의 useEffect 안에서 쓴다 생성/소멸)
	useEffect(() => {
		console.log('Mounted');

		return () => {
			console.log('UnMounted');
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

-컴포넌트 변경(State Change)
--- useEffect의 의존성 배열에 특정 state 등록, 해당 state가 변경될 떄마다 실행됨

-컴포넌트 소멸(UnMount)
--- useEffect에 의존성 배열이 비어 있는 상태에서 return 함수를 내보내면 컴포넌트 소멸시 한번만 실행됨
*/
