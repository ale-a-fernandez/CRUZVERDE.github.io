document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Simulación de datos de autenticación
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Ejemplo simple de validación (puedes cambiar esta parte para integrar una API real)
    if (username === "usuario123" && password === "password123") {
      window.location.href = "dashboard.html"; // Redirigir al dashboard (página protegida)
    } else {
      document.getElementById("error-message").textContent =
        "Usuario o contraseña incorrectos";
    }
  });