export default function App() {
	const name = '홍길동';
	const cl_name = 'wrap';
	const changebutton = (e, txt) => {
		e.target.innerText = txt;
		// console.log(txt);
	};

	//미션 : 2번 txt에 문자를 집어 넣어서 button글자 내용을 변경되게 호출
	return (
		<>
			<section className={cl_name}>
				<h1>안녕하세요 제이름은 {name} 입니다.</h1>
				<button onClick={(e) => changebutton(e, '버튼2')}>버튼</button>
			</section>
		</>
	);
}
