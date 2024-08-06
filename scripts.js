// Función para el formulario de inicio de sesión
function verificar() {
    const contraseña = 'pass';
    const clave = document.getElementById('clave').value;

    if (clave !== contraseña) {
        alert('La contraseña es incorrecta');
    } else {
        window.location.href = "https://supercell.com/en/games/clashroyale/"; // Reemplaza esta URL con la URL deseada
    }
}

// Función para el contador de daño
let contador = 0;

function incremento() {
    contador++;
    alert("Has asumido: " + contador + " hp de daño");
}

// Función para el formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myform');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Por favor completa todos los campos.');
        } else {
            // Aquí puedes enviar el formulario o realizar otras acciones
            alert('Formulario enviado exitosamente.');
            form.reset();
        }
    });
});
