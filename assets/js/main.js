(() => {
  const page = document.body.dataset.page;
  if (!page) return;

  const active = document.querySelector(`.site-nav a[data-nav="${page}"]`);
  if (active) active.classList.add("is-active");
})();

// =========================
// Mobile Nav Toggle
// =========================
(function(){
  const toggleBtn = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobileNav");
  const closeBtn = document.querySelector(".mobile-nav-close");

  if(!toggleBtn || !mobileNav) return;

  function openNav(){
    document.body.classList.add("nav-open");
    toggleBtn.setAttribute("aria-expanded","true");
    mobileNav.setAttribute("aria-hidden","false");
  }

  function closeNav(){
    document.body.classList.remove("nav-open");
    toggleBtn.setAttribute("aria-expanded","false");
    mobileNav.setAttribute("aria-hidden","true");
  }

  toggleBtn.addEventListener("click", () => {
    const isOpen = document.body.classList.contains("nav-open");
    if(isOpen) closeNav();
    else openNav();
  });

  if(closeBtn){
    closeBtn.addEventListener("click", closeNav);
  }

  // 딤(바깥 영역) 클릭하면 닫기
  mobileNav.addEventListener("click", (e) => {
    // 패널 영역(.mobile-nav-links) 밖을 클릭했을 때만 닫기
    const panel = mobileNav.querySelector(".mobile-nav-links");
    if(panel && !panel.contains(e.target)) closeNav();
  });

  // ESC로 닫기
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeNav();
  });

  // 모바일 메뉴에서 링크 누르면 자동으로 닫기
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", closeNav);
  });
})();
