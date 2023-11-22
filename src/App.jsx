import Modal from './modal/Modal';
import { useState } from 'react';

export default function App() {
	console.log('app re-rendered');
	// useState hook 배열반환
	// [초기 state 값, 해당 state 변경 전용 함수]
	const [IsOpen, setIsOpen] = useState(false);
	/*
	const handleModal = (e) => {
		console.log('handleModal called');
		// setIsOpen(true);
		setIsOpen(!IsOpen);
		//setIsChange(!IsChange);
	};
	*/
	return (
		<>
			<h1>부모 컴퍼넌트</h1>
			<button
				onClick={() => {
					// handleModal
					setIsOpen(!IsOpen);
				}}
			>
				{IsOpen ? '모달열기' : '모달닫기'}
			</button>
			{/* 삼항 연산자 */}
			{IsOpen && <Modal />}
			{/* {isOpen ? <Modal /> : null} */}
		</>
	);
}
/*
libraray vs framework
- librara(react, jQuery) : 자주쓰는 편의기능의 문법만 따로 준비되어 있는 구조라서 어떤 프로젝트 구조라도 해당 문법만 가지고 와 쓰면기 때문에 강제력이 적으므로, 코드의 응용범위가 넓고, 개발자 역량에 따라서 해당코드를 조합 가능하기 때문에 난이도가 있다.

- framework(angular. vue, next) : 모든 시스템들을 강제해서 framework만의 고유 문법을 활용해서 개발 가능하기 떄문의 작업자의 개입이 최소, 코드 난이도는 쉽지만, 응용범위가 적어짐

react에서의 hook 개념(16버전 새로 생긴 개념, 이전까지는 객체지향의 class 기반)
- 리액트에서 많이 쓰는 기능들을 함수형태로 모아놓은 기능 모음집(리액트 기반의 필수 내장 플러그인)

리액트 hook의 기본 convention(규악)
- 함수 이름의 시작을 use
- return 값을 내보냄
- hook은 핸들러 함수 안쪽, 또 다른 hook 안에서 호출 불가
-컴포넌트 함수의 상위 루트단에서만 호출 가능

리액트에서 가장 많이 쓰이는 기본 hook 3대장
- useState : 화면에 재 랜더링을 담당하는 중요한 정보값을 담을 그릇을 생성 및 관리
- useEffect : 해당 컴포넌트의 생명주기(life Cycle)을 관리 하기 위함
- useRef : 화면에 재 랜더링을 유발하지 않으며, 특정 값을 관리, 가상돔이 아닌 리얼돔을 직접 선택시 

CustomHook : 사용자가 필요에 의해서 직접 등록하는 hook
- 내장되어 있는 hook이 아니고 사용자가 직접 만드는 hook
- 규칙은 기존 hook과 동일(use, handler안에 못하는 그런고..)

https://velog.io/@mingle_1017/React-%EB%AA%A8%EB%8B%AC-%EC%B0%BD-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EA%B8%B0%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-react-modal
*/
