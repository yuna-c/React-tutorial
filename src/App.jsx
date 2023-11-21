export default function App() {
	const person = '홍길동';
	const cl_name = 'wrap';

	/* 
	JSX문 안쪽에 {}안에서 가능한 연산이 제한적
	1. 변수 치환
	2. 조건문(삼항연산자 ,&&연산자)
	3. 반복문(map)
	*/
	return (
		<>
			<section className={cl_name}>
				<h1>안녕하세요. 제 이름은 {person} 입니다.</h1>
			</section>
		</>
	);
}
