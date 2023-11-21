import './Card.scss';

export default function Card({ colorName = 'gray', index = 0, wid = 250, show = true }) {
	//디폴트 파라미터를 활용해서 특정값 미 전달시 디폴트값 미리 설정가능
	return (
		<article className='Card' style={{ width: wid }}>
			<div className='bgBox' style={{ backgroundColor: colorName }}></div>
			{show && (
				<div className='txtBox'>
					{index + 1}-{colorName}
				</div>
			)}
			{/* 이것도 삼항 연산자 분기처리얌 */}
		</article>
	);
}
