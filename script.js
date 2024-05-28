// 헤더 스크롤 액티브 이벤트
window.addEventListener('scroll', () => {
  const headerEl = document.querySelector('header');
  const carrerEl = document.querySelector('#carrer');

  window.scrollY > carrerEl.offsetTop - headerEl.clientHeight
    ? headerEl.classList.add('active')
    : headerEl.classList.remove('active');
});

// 헤더 네비게이션 이동 이벤트
document.querySelectorAll('nav a').forEach((nav) => {
  nav.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(e.target.hash).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// 애니메이션 라이브러리
AOS.init();
