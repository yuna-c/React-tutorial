import Card from './card/Card';

export default function App() {
	const colors = ['orange', 'hotpink', 'aqua', 'green'];

	return (
		<>
			<h1>Color Chart</h1>

			{colors.map((color, idx) => {
				return (
					<Card
						key={color + idx}
						colorName={color}
						index={idx}
						// JSX내부적으로는 if 문을 쓸 수 없기 떄문에 삼항연산자로 값 자체를 조건문 처리 가능
						wid={idx === 1 ? 300 : 150}
						// show={'block'}
						//show={idx === 2 ? 'none' : 'block'}
						show={idx === 2 ? false : true}
					/>
				);
			})}
			<Card />
		</>
	);
}
