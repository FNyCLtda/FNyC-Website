(() => {
  const catalog = document.getElementById('servicios-catalogo');
  if (!catalog || !window.SERVICES) return;

  SERVICES.forEach(service => {
    const card = document.createElement('article');
    card.className = 'service-card';

    card.innerHTML = `
      <div class="service-media">
        <img src="${service.image}" alt="${service.name}" class="service-image" loading="lazy">
        <div class="service-overlay">
          <h3 class="service-title">${service.name}</h3>
          <p class="service-desc">${service.description}</p>
          <a href="/servicios/${service.id}" class="service-btn">Ver servicio</a>
        </div>
      </div>
    `;

    catalog.appendChild(card);
  });
})();
