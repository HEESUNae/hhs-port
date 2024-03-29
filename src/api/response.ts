import { appImage, mainImg, skillImg, thumbnail } from '../consts/image';

// MYINFO API
export const myInfoApi = [
  {
    id: 1,
    icon: mainImg.icoBirth,
    content: '1994.03.31 , A형',
  },
  {
    id: 2,
    icon: mainImg.icoHandShake,
    content: '010-7139-3044',
  },
  {
    id: 3,
    icon: mainImg.icoEmail,
    content: 'heesun9456@gmail.com',
  },
  {
    id: 4,
    icon: mainImg.icoHouse,
    content: '인천광역시 부평구',
  },
  {
    id: 5,
    icon: mainImg.icoPeople,
    content: 'ISFJ 용감한 수호자',
  },
];

// MYINFO LINK API
export const myInfoLinkApi = [
  {
    id: 1,
    link: 'https://github.com/HEESUNae',
    image: mainImg.icoGithub,
    title: 'Github',
  },
  {
    id: 2,
    link: 'https://heesunae.notion.site/93f66c3060c242fd95a5f05829119760?pvs=4',
    image: mainImg.icoNotion,
    title: 'Notion',
  },
];

// CARRER API
export const carrerApi = [
  {
    id: 1,
    period: '2022.06 ~ 2023.07',
    companyName: '도로시',
    companyCategory: 'SI회사',
    work: '웹퍼블리싱, API 연동',
  },
  {
    id: 2,
    period: '2021.10 ~ 2022.03',
    companyName: '웹플래닛',
    companyCategory: '웹에이전시',
    work: '웹퍼블리싱',
  },
  {
    id: 3,
    period: '2020.02 ~ 2021.07',
    companyName: '나우랩',
    companyCategory: '웹에이전시',
    work: 'UI/UX 디자인 & 웹퍼블리싱',
  },
  {
    id: 4,
    period: '2018.11 ~ 2019.09',
    companyName: '비드마스타',
    companyCategory: '입찰정보회사',
    work: 'UI/UX 디자인 & 웹퍼블리싱',
  },
  {
    id: 5,
    period: '2018.01 ~ 2018.02',
    companyName: '넥스원',
    companyCategory: '쇼핑몰',
    work: '상세페이지 디자인',
  },
  {
    id: 6,
    period: '2017.08 ~ 2017.09',
    companyName: '슈퍼북',
    companyCategory: '드라마 대본제작',
    work: '드라마 대본편집',
  },
  {
    id: 7,
    period: '2015.01 ~ 2017.04',
    companyName: '우리네트웍스',
    companyCategory: '정보통신회사',
    work: '경리업무',
  },
];

// SKILL API
export const skillApi = [
  {
    id: 1,
    lang: 'HTML5',
    image: skillImg.icoHtml,
    bgColor: '#e34f26',
    contents:
      '웹표준을 준수하며 시맨틱 마크업을 사용하여 웹 페이지의 구조와 의미를 명확하게 다양한 HTML 요소를 활용하여 표현합니다',
  },
  {
    id: 2,
    lang: 'CSS3',
    image: skillImg.icoCss,
    bgColor: '#1572b6',
    contents:
      '다양한 CSS 스타일 속성을 이해하고 활용하고, 기본 선택자부터 계층 선택자, 클래스 선택자, 아이디 선택자, 가상 클래스 선택자 등을 활용하여 원하는 요소를 정확하게 스타일링합니다. 또한 반응형 웹 디자인을 위해 미디어 쿼리를 이해하고 활용하며, CSS 파일을 구조화하여 모듈화하고, 효율적인 스타일 시트 관리합니다.',
  },
  {
    id: 3,
    lang: 'SCSS',
    image: skillImg.icoScss,
    bgColor: '#cc6699',
    contents:
      'SCSS의 중첩 기능을 이해하고 활용하며, 변수와 믹스인을 활용하여 스타일을 모듈화하고 재사용성을 높히고 관련된 스타일을 하나의 모듈로 구성하여 필요한 곳에서 재사용할 수 있도록 설계합니다.',
  },
  {
    id: 4,
    lang: 'JavaScript',
    image: skillImg.icoJavaScript,
    bgColor: '#f7df1e',
    contents:
      '웹 페이지의 DOM 을 조작하고 이벤트를 처리하며, async/await 등을 활용하여 비동기 작업을 제어하고 배열의 메서드와 반복문을 활용하여 데이터를 처리하고 조작할 수 있으며, 객체의 속성과 메서드를 다룰 수 있습니다.',
  },
  {
    id: 5,
    lang: 'TypeScript',
    image: skillImg.icoTypeScript,
    bgColor: '#3178c6',
    contents:
      '인터페이스를 정의하고 활용하며 제네릭 타입과 유니온타입을 활용하여 유연하고 재사용 가능한 코드를 작성할 수 있습니다',
  },
  {
    id: 6,
    lang: 'React',
    image: skillImg.icoReact,
    bgColor: '#61dafb',
    contents:
      '컴포넌트 계층 구조를 구성하고 조작하며 상태(State)와 속성(Props)의 개념을 이해하고, 상태 관리 라이브러리를 이용해 상태의 변경을 관리하며 컴포넌트 간에 데이터를 전달할 수 있습니다. SCSS와 Styled Components를 활용하여 컴포넌트를 스타일링하고 React Router를 활용해 라우팅을 하며, 컴포넌트에서 이벤트를 처리하고 관리합니다. React lazy로 코드 스플레팅하여 렌더링 성능을 최적화 합니다. React-Native 책을 보면서 IOS 기준으로  TodoList를 만들어보았습니다.',
  },
  {
    id: 7,
    lang: 'Next.js',
    image: skillImg.icoNextjs,
    bgColor: '#000000',
    contents:
      '서버 사이드 렌더링의 개념을 이해하며, 페이지 및 컴포넌트 구조, 라우팅 설정, 데이터 페칭을 할 수 있습니다.',
  },
  {
    id: 8,
    lang: 'Node.js',
    image: skillImg.icoNodejs,
    bgColor: '#339933',
    contents: 'Express 를 활용해 웹서버를 만들수 있습니다. CRUD API 기능을 만들 수 있습니다.',
  },
  {
    id: 9,
    lang: 'MongoDB + Mongoose',
    image: skillImg.icoMongodb,
    bgColor: '#47A248',
    contents: 'Mongoose로 간단한 스키마 모델을 만들고 데이터를 저장할 수 있습니다.',
  },
];

// PROJECT API
export const projectApi = [
  {
    link: 'https://ggl.co.kr/ko/main/main.html#anchor1',
    thumbnail: thumbnail.green,
    info: '(주)그린글로브라인 홈페이지 퍼블리싱한 프로젝트',
    lang: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    link: 'http://henit.co.kr/main/main.html',
    thumbnail: thumbnail.han,
    info: '(주)헨정보기술 홈페이지 퍼블리싱한 프로젝트',
    lang: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    link: 'https://sweet-potato.vercel.app/',
    thumbnail: thumbnail.sweet,
    info: '직접 CRUD API 기능 구현한 개인 포트폴리오 "고답"',
    lang: ['HTML', 'CSS', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'Mongoose'],
  },
  {
    link: 'https://starbucks-pink.vercel.app/',
    thumbnail: thumbnail.starbucks,
    info: '스타벅스 커피를 소개하는 포트폴리오',
    lang: ['HTML', 'CSS', 'TypeScript', 'React'],
  },

  {
    link: 'https://best-dilly.vercel.app/',
    thumbnail: thumbnail.bestDilly,
    info: '맛집 공유 플랫폼 개인 포트폴리오 "Best Dilly"',
    lang: ['HTML', 'CSS', 'TypeScript', 'React'],
  },
  // {
  //   link: 'https://incheon-parking.vercel.app/',
  //   thumbnail: thumbnail.incheonParking,
  //   info: '인천광역시 주차장 정보를 알 수 있는 개인 포트폴리오 "Incheon Parking"',
  //   lang: ['HTML', 'CSS', 'TypeScript', 'React'],
  // },

  // {
  //   link: 'https://react-mongo-todo-app.vercel.app/',
  //   thumbnail: thumbnail.todoList,
  //   info: '직접 CRUD API 기능 구현한 개인 포트폴리오 "Todo List"',
  //   lang: ['HTML', 'CSS', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'Mongoose'],
  // },
  // {
  //   link: 'https://nextjs-rabbit.vercel.app/',
  //   thumbnail: thumbnail.rabbitBlog,
  //   info: '무료 API를 활용하여 만든 개인 포트폴리오 "Support Rabbit Blog"',
  //   lang: ['HTML', 'CSS', 'TypeScript', 'Next.js'],
  // },

  {
    link: 'https://pokemon-book-one.vercel.app/',
    thumbnail: thumbnail.pokemonBook,
    info: '무료 포켓몬 API를 활용하여 만든 "Pokemon book" 클론코딩',
    lang: ['HTML', 'TailWindCSS', 'JavaScript', 'React'],
  },

  {
    link: 'https://heesunae.github.io/react-tictactoc/',
    thumbnail: thumbnail.tictactoe,
    info: '"Tic Tac Toe" 게임 클론코딩',
    lang: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    link: 'https://heesunae.github.io/Apple-ipad/',
    thumbnail: thumbnail.apple,
    info: '"Apple Ipad" 클론코딩',
    lang: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    link: 'https://react-maple.vercel.app/',
    thumbnail: thumbnail.maple,
    info: '메이플스토리 캐릭터 정보와 랭킹을 소개하는 포트폴리오 "Mapple Story"',
    lang: ['HTML', 'CSS', 'TypeScript', 'React'],
  },
  {
    link: 'https://react-cover-girl.vercel.app/',
    thumbnail: thumbnail.coverGirl,
    info: 'CoverGril 브랜드의 화장품 정보를 알려주는 개인 포트폴리오 "CorverGirl"',
    lang: ['HTML', 'CSS', 'TypeScript', 'React'],
  },
  {
    link: 'https://heesunae.github.io/pokemon/',
    thumbnail: thumbnail.pokemon,
    info: '무료 포켓몬 API를 활용하여 만든 개인 포트폴리오 "Pokemon"',
    lang: ['HTML', 'CSS', 'TypeScript', 'React'],
  },
  // {
  //   link: 'https://react-disey.web.app/',
  //   thumbnail: thumbnail.disney,
  //   info: '<fastcampus> "Disney Plus"',
  //   lang: ['HTML', 'CSS', 'JavaScript', 'React'],
  // },
  // {
  //   link: 'https://heesunae.github.io/starbucks/',
  //   thumbnail: thumbnail.starbucks,
  //   info: '"Starbucks" 클론코딩',
  //   lang: ['HTML', 'CSS', 'JavaScript'],
  // },
];

// APP API
export const appApi = [
  {
    id: 1,
    thumbnail: appImage.appWallpaper,
    title: 'WallPaper',
    desc: '핸드폰 배경화면을 다운로드 받을 수 있는 어플',
  },
  {
    id: 2,
    thumbnail: appImage.appTranslate,
    title: 'Translation',
    desc: '언어별로 언어 변경해서 볼수있는 포춘쿠키 어플',
  },
  {
    id: 3,
    thumbnail: appImage.appGallery,
    title: 'Gallery',
    desc: '앨범을 만들고 이미지를 추가하는 갤러리 어플',
  },
  {
    id: 4,
    thumbnail: appImage.appBus,
    title: 'Kakao Bus',
    desc: '카카오 버스 도착 정보 어플',
  },
  {
    id: 5,
    thumbnail: appImage.appKakao,
    title: 'Kakao friend List',
    desc: '카카오톡 친구 리스트',
  },
  // {
  //   id: 5,
  //   thumbnail: appImage.appCalc,
  //   title: 'WallPaper',
  //   desc: '핸드폰 배경화면을 다운로드 받을 수 있는 어플',
  // },
];
