document.getElementById('btnLogin').addEventListener('click', validarLogin);
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') validarLogin();
});

function validarLogin() {
  const usuarios = {
    "71585066": "71585066",
    "09833645": "09833645"
  };

  const usuario = document.getElementById('usuario').value.trim();
  const clave = document.getElementById('contrasena').value.trim();
  const mensaje = document.getElementById('mensaje');
  const sonido = document.getElementById('loginSound');

  mensaje.textContent = "";
  mensaje.className = "";

  if (!usuario || !clave) {
    mensaje.textContent = "⚠ Por favor, complete ambos campos.";
    mensaje.className = "error";
    return;
  }

  if (usuarios[usuario] && usuarios[usuario] === clave) {
    mensaje.textContent = "✅ Acceso concedido. Cargando...";
    mensaje.className = "success";
    sonido.play();

    // Guardar sesión simulada
    localStorage.setItem('usuarioActivo', usuario);

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 2000);
  } else {
    mensaje.textContent = "⛔ Acceso denegado. Usuario o clave incorrectos.";
    mensaje.className = "error";
  }
}
