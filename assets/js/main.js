(() => {
  const page = document.body.dataset.page;
  if (!page) return;

  const active = document.querySelector(`.site-nav a[data-nav="${page}"]`);
  if (active) active.classList.add("is-active");
})();
