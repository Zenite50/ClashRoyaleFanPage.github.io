// Manejo del formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    alert('Inicio de sesión exitoso'); // Muestra una alerta de éxito
    window.location.href = 'info.html'; // Redirige a la página de información
});

// Manejo del formulario de registro
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    alert('Registro exitoso'); // Muestra una alerta de éxito
});

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    alert('Mensaje enviado'); // Muestra una alerta de éxito
});

// Manejo del botón de cerrar sesión
document.addEventListener('DOMContentLoaded', function() {
    if(document.getElementById('logoutButton')) {
        document.getElementById('logoutButton').addEventListener('click', function() {
            alert('Sesión cerrada'); // Muestra una alerta de cierre de sesión
            window.location.href = 'index.html'; // Redirige a la página principal
        });
    }
});
