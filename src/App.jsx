import { useState } from 'react';
import Modal from './modal/Modal';

export default function App() {
	console.log('app re-rendered');
	let isOpen = false;
	const [Open, setOpen] = useState(0);

	// 핸들러 함수
	const handleModal = () => {
		console.log('handleModal called');
		isOpen = false;
	};

	return (
		<>
			{/* 삼항 연산자 */}
			<h1>부모 컴퍼넌트</h1>
			<button
				onClick={() => {
					setOpen(true);
				}}
			>
				모달 토글
			</button>
			{/* state */}
			{isOpen && <Modal />}
			{/* {isOpen ? <Modal /> : null} */}
		</>
	);
}
/*
react에서 화면 렌더링에 관여하는 중요한 정보값을 state로 관리하고 해당 state를 무조건 전용 함수로만 변경해아 되는 이유
- 화면에 변화를 담당하는 정보 값은 중요한 정보값 이므로 쉽게 변경하지 못하도록 미리 약속된 규약에 의해서만 변경할 수 있도록 강제하기 위함
-화면에 변경을 담당하는 중요한 정보 값은 무조건 state에 담기도록 강제되어 있으므로 추후 유지보수시 개발자는 state값만 관리하면 되기 떄문에 프로젝트 유지보수 효율성이 올라감
-react는 state가 변경되야지만 해당 내용의 변경점을 인식해서 자기 자신을 재호출
*/
