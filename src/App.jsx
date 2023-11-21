export default function App() {
	//리액트에서는 특정 DOM(가상DOM) 요소 선택시 가급적 document.querySelector 사용 지양
	//리액트 구조상 document.querySeletor은 현재 작어하고 있는 최신 가상돔이 아닌 이미 한번 real-Dom형태로 변환된 예전 DOM을 찾게 되므로 DOM요소의 신뢰성이 떨어짐
	const name = '기훈이형';
	const names = ['홍길동0', '홍길동1', '홍길동2', '홍길동3', '홍길동4'];
	const cl_name = 'wrap';
	//미션 : 2번 txt에 문자를 집어 넣어서 button글자 내용을 변경되게 호출
	const changebutton = (e, txt) => {
		e.target.innerText = txt;
		// console.log(txt);
		// console.log((e.target.innerText = 'txt'));
	};

	return (
		<>
			<section className={cl_name}>
				<h1>안녕하세요 제이름은 {name} 입니다.</h1>
				<button onClick={(e) => changebutton(e, '버튼2')}>버튼</button>
				<br></br>
				<ul>
					{names.map((name, idx) => {
						return <li key={idx}>{name}</li>;
					})}
				</ul>
			</section>
		</>
	);
}
