const form = document.getElementById('registroForm')
const mensajeDiv = document.getElementById('mensaje')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const nombreImput = document.getElementById('nombre')
    const correoImput = document.getElementById('correo')

    const nombre = nombreImput.value
    const correo = correoImput.value

    if (nombre.trim() === '' || correo.trim() === '') {
        mostrarMensaje(
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor copleta todos los campos!',
            })
        )
    } else {
        mostrarMensaje(Swal.fire({
            position: 'center',
            icon: 'success',
            title: `¡Bienvenido, ${nombre}! Tu correo electrónico (${correo}) ha sido registrado.`,
            showConfirmButton: false,
            timer: 2500
        }))
        limpiarFormulario()
    }
})

function mostrarMensaje(mensaje) {
    mensajeDiv.textContent = mensaje
}

function limpiarFormulario() {
    form.reset()

}
