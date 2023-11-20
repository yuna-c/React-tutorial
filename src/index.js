import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

/*
SSR vs CSR
SSR - Server Side Rendering
- 페이지 이동시마다 일일이 서버쪽에 출력할 Html 파일을 요청
- 장점 : 초기 로딩속도 빠름, 검색엔진에 최적화(SEO에 좋음)
- 단점 : 페이지 이동시 마다 서버쪽 요청을 해야되므로 깜빡거리면서 로딩되며 페이지 변경

CSR - Client Side Rendering
- 초기에 빈 Html 파일을 서버쪽에서 가져옴, 이때 화면에 출력될 모든 데이터를 chunk단위로 구성된 자바스크립트 파일을 모두 가져옴
- 장점 : 한번에 모든 페이지 데이터를 미리 다 불러오기 때문에 페이지 변경 요청시마다 서버요청 없이 클라이언트에서 부드럽게 화면 전환
- 단점 : 한번에 모든 데이터를 불러오기 때문에 초기 로딩속도가 SSR방식에 비해서 느림, 검색엔진에 최적화 안되어 있음
*/
