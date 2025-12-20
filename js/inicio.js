(() => {
  const track = document.getElementById('svcTrack');
  const prev = document.getElementById('svcPrev');
  const next = document.getElementById('svcNext');
  if (!track || !prev || !next || !window.SERVICES) return;

  const featured = SERVICES.filter(s => s.featured);

  // Generar las tarjetas
  featured.forEach(service => {
    const card = document.createElement('article');
    const msjWs = `Hola!, quisiera cotizar: ${service.name}`;
    card.className = 'carousel-card';
    card.innerHTML = `
      <div class="service-media">
        <img src="${service.image}" alt="${service.name}" class="service-image" loading="lazy">
        <div class="service-overlay">
          <h3 class="service-title">${service.name}</h3>
          <p class="service-desc">${service.description}</p>
          <a href="https://wa.me/56944416878?text=${encodeURIComponent(msjWs)}." target="_blank" rel="noopener noreferrer" class="service-btn">
            Cotizar
          </a>
        </div>
      </div>
    `;
    track.appendChild(card);
  });

  const cards = track.querySelectorAll('.carousel-card');
  const cardCount = cards.length;
  let index = 0;

  // Obtener ancho de cada tarjeta + gap
  function getStep() {
    const card = track.querySelector('.carousel-card');
    if (!card) return 0;
    const gap = parseInt(getComputedStyle(track).gap) || 0;
    return card.offsetWidth + gap;
  }

  const step = getStep();

  // Función para mover al índice deseado
  function scrollToIndex(i) {
    track.scrollTo({ left: i * step, behavior: 'smooth' });
  }

  // Auto-scroll infinito
  function autoScroll() {
    index++;
    if (index >= cardCount) index = 0; // loop infinito
    scrollToIndex(index);
  }

  let autoInterval = setInterval(autoScroll, 2000); // cada 3 segundos

  // Botones
  next.addEventListener('click', () => {
    clearInterval(autoInterval); // pausa auto-scroll al usar botones
    index++;
    if (index >= cardCount) index = 0;
    scrollToIndex(index);
    autoInterval = setInterval(autoScroll, 2000); // reanuda auto-scroll
  });

  prev.addEventListener('click', () => {
    clearInterval(autoInterval);
    index--;
    if (index < 0) index = cardCount - 1;
    scrollToIndex(index);
    autoInterval = setInterval(autoScroll, 2000);
  });

  // Ajuste al cambiar tamaño de ventana
  window.addEventListener('resize', () => {
    scrollToIndex(index);
  });
})();
