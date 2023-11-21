import Card from './card/Card';

export default function App() {
	const colors = ['pink', 'lightblue', 'lightcoral', 'lightcyan', 'lightgreen'];

	return (
		<>
			<h1>Color Chart</h1>
			{colors.map((color, idx) => {
				// 컴포넌트 호출시 특정 값을 key={value} 형태로 컴포넌트 내부에 전달 가능 {props}
				// 컨트롤 파일명 클릭 바로 파일 열어줌
				return <Card key={color + idx} colorName={color} index={idx} />;
			})}
		</>
	);
}
