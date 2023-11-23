import { useRef, useState } from 'react';
import './App.scss';

/*
useRef은 해당 렌더링 사이클에 바로 변경사항 반영
useState는 다음번 렌더링 사이클에 변경사항 반영
*/

export default function App() {
	console.log('render');
	const num1 = useRef(0);
	const [Num2, setNum2] = useState(0);

	const handleClick = () => {
		num1.current++;
		setNum2(Num2 + 1);

		console.log('num1', num1.current);
		console.log('Num2', Num2);
	};
	return (
		<>
			<button onClick={handleClick}>클릭</button>
		</>
	);
}
