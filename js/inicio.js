(() => {
  const params = new URLSearchParams(window.location.search);
  const redirectMsj = document.getElementById('redirect-msj');
  const overlay = document.getElementById("navbar-overlay");
  if (params.get('from') == 'redirect') {
    redirectMsj.style.display = 'block';
    setTimeout(() => {
      redirectMsj.style.opacity = '0';
      setTimeout(() => {
        redirectMsj.style.opacity = '1';
        redirectMsj.style.display = 'none';
      }, 1000);
    }, 6000);
  }
})();


//////////////////////////////////////
// Carousel de servicios destacados //
//////////////////////////////////////

(() => {
  const track = document.getElementById('svcTrack');
  const prev = document.getElementById('svcPrev');
  const next = document.getElementById('svcNext');
  if (!track || !prev || !next || !window.SERVICES) return;

  const featured = SERVICES.filter(s => s.featured);

  // Generar las tarjetas
  featured.forEach(service => {
    const card = document.createElement('article');
    const msjWs = `Hola, quisiera solicitar una cotización por ${service.name}.`;
    card.className = 'carousel-card';
    card.innerHTML = `
      <div class="service-media">
        <img src="${service.image}" alt="${service.name}" class="service-image" loading="lazy">
        <div class="service-overlay">
          <h3 class="service-title">${service.name}</h3>
          <p class="service-desc">${service.description}</p>
          <a href="https://wa.me/56944416878?text=${encodeURIComponent(msjWs)}" target="_blank" rel="noopener noreferrer" class="service-btn">
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


const formulario = document.getElementById("formulario");
const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("button");
const campos_incompletos = document.getElementById("campos_incompletos");
const msj_exito = document.getElementById("msj_exito");
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    if (!nombre.value.trim() || !correo.value.trim() || !mensaje.value.trim()) {
        campos_incompletos.style.display = "block";
        setTimeout(() => {
            campos_incompletos.style.display = "none";
        }, 2500);
        return
    };
    boton.innerText = "Enviando...";
    boton.disabled = true;
    const datos = new FormData(formulario);
    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            boton.innerText = "Enviar";
            boton.style.display = "none";
            msj_exito.style.display = "block";
            setTimeout(() => {
                boton.disabled = false;
                boton.style.display = "block";
                msj_exito.style.display = "none";
                formulario.reset();
            }, 5000);
            return;
        } else {
            alert("Error al enviar el formulario");
            boton.disabled = false;
            boton.innerText = "Enviar";
            return;
        }
    })
    .catch(error => {
        alert("Error de red, intenta mas tarde");
        boton.disabled = false;
        boton.innerText = "Enviar";
        return;
    });
});

