document.querySelectorAll('[data-slider]').forEach(slider => {
  const track = slider.querySelector('[data-track]');
  const slides = Array.from(track.children);
  const prevBtn = slider.querySelector('[data-prev]');
  const nextBtn = slider.querySelector('[data-next]');

  let index = 0;

  function update() {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    update();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });
});
