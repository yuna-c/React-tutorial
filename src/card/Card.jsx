import './Card.scss';

function Card(name, index, width, show) {
	// 부모 컴퍼넌트에 전달되는 요소들을 props라는 객체로 묶어서 자식 컴포넌트의 파라미터로 전달 받음
	// props{ name:'색상', index:'순서', width:'넓이', show:'display속성값' }
	// const { name, index, width, show } = props;
	// 만약 이전처럼 단지 props라는 파라미터 이름으로만 객체를 통으로 전달하면 props로 전달되는 값이 많을 떄 어떤 값이 전달되는지 파악하기 힘들. 그러므로 보통 비구조화할당을 이용해서 직접 전달{일반적)
	console.log(name, index, width, show);

	// 미션1 - 부모 해당 컴포넌트 호출시 props로 부터 width값을 전달 받아서 각 카드 컴포넌트 크기가 다르도록 호출
	// 미션2 - 부모 특정 값에 따라 txtBox의 보임유무를 결정할 수 있게 호출

	return (
		<article className='card' style={{ width }}>
			<div className='bgBox' style={{ backgroundColor: name }}></div>
			<div className='txtBox' style={{ display: show }}>
				{index + 1} - {name}
			</div>
		</article>
	);
}
export default Card;
