(() => {
  const track = document.getElementById('svcTrack');
  const prev = document.getElementById('svcPrev');
  const next = document.getElementById('svcNext');
  if (!track || !prev || !next || !window.SERVICES) return;

  const featured = SERVICES.filter(s => s.featured);

  let index = 0;

  featured.forEach(service => {
    const card = document.createElement('article');
    card.className = 'carousel-card';

    card.innerHTML = `
      <img src="${service.image}" alt="${service.name}">
      <a href='${service.id}' class="carousel-overlay">
        <h3>${service.name}</h3>
      </a>
    `;

    track.appendChild(card);
  });

  function getStep() {
    const card = track.querySelector('.carousel-card');
    if (!card) return 0;
    const gap = parseInt(getComputedStyle(track).gap) || 0;
    return card.offsetWidth + gap;
  }

  function update() {
    track.style.transform = `translateX(-${index * getStep()}px)`;
  }

  next.addEventListener('click', () => {
    if (index < featured.length - 1) {
      index++;
      update();
    }
  });

  prev.addEventListener('click', () => {
    if (index > 0) {
      index--;
      update();
    }
  });

  window.addEventListener('resize', update);
})();
