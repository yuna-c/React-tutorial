export default function App() {
	const colors = ['orange', 'red', 'green', 'blue', 'pink'];
	return (
		<>
			<h1>Color Chart</h1>

			<ul>
				{/* <li style={{ backgroundColor: '#000' }}></li>
				<li style={{ backgroundColor: '#111' }}></li>
				<li style={{ backgroundColor: '#222' }}></li>
				<li style={{ backgroundColor: '#333' }}></li>
				<li style={{ backgroundColor: '#444' }}></li> */}
				{colors.map((color, idx) => {
					return (
						//return문에서 map을 통해 반복적으로 생성되는 가상돔 요소에는 무조건 고유의 key값을 줘야함
						//리액트로 하여금 여러개의 반복 요소 중에서 수정 요소를 효율적으로 비교 탐색 하기 위함
						//key값 고유문자 값 만들기 color + idx/ performance().now+idx/
						// DB의 각 데이터에 내장되어 있는 Object_id를 활용하거나 실제 데이터와 순번을 결합해서 고유문자값 생성
						<li key={color + idx} style={{ color: color }}>
							{color}
						</li>
					);
				})}
			</ul>
		</>
	);
}
