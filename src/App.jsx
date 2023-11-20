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
컴포넌트 함수의 필수 조건
1. 함수명을 대문자로 시작
2. JSX를 리턴
3. 해당 컴포넌트 함수는 복수개의 JSX요소를 리턴 불가능 
4. 복수개의 요소를 내보내고 싶을 때는 상위요소로 wrapping 처리 해서 내보냄 
5. 불필요한 상위 wrapping 태그 출력 싫을 시 fragment로 <></> 출력
6. JSX는 기본적으로 자바스크립트 문법이기 때문에 예약어 명령어 사용 불가()

JSX: 리액트에서 전용으로 쓰이는 돔 생성문법
원래는 react.createElement()라는 메서드를 이용해서 복잡하게 구성해야 하는 로직을 Html태그를 따라한 친화적 문법으로 편하게 Dom 생성을 위한 React만의 문법 체계
*/
