import { Footer, Header } from './components/common/Layout';
import Visual from './components/main/Visual';

function App() {
	return (
		<>
			<Header />
			<Visual />
			<Footer />
		</>
	);
}

export default App;

/*
export default 컴포넌트 함수
	: 하나의 파일에서 하나의 컴포넌트 함수를 내볼낼때
	export 컴포넌트함수
	: 하나의 파일에서 여러개의 컴포넌트 함수를 등록해서 선별적으로 내보낼때
*/
