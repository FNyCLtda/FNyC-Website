(() => {
  const catalog = document.getElementById('servicios-catalogo');
  if (!catalog || !window.SERVICES) return;

  SERVICES.forEach(service => {
    const card = document.createElement('article');
    const msjWs = `Hola!, quisiera cotizar: ${service.name}`;
    card.className = 'service-card';

    card.innerHTML = `
      <div class="service-media">
        <img src="${service.image}" alt="${service.name}" class="service-image" loading="lazy">
        <div class="service-overlay">
          <h3 class="service-title">${service.name}</h3>
          <p class="service-desc">${service.description}</p>
          <a href="https://wa.me/56944416878?text=${encodeURIComponent(msjWs)}." target="_blank" rel="noopener noreferrer" class="service-btn">Cotizar</a>
        </div>
      </div>
    `;

    catalog.appendChild(card);
  });
})();
