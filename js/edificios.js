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
