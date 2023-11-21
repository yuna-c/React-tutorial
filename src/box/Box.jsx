import './Box.scss';
export default function Box() {
	const changeBg = (e, bg) => {
		e.target.style.backgroundColor = bg;
	};
	return (
		<div className='box' onClick={(e) => changeBg(e, 'hotpink')}>
			Box
		</div>
	);
}
