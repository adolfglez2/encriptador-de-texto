document.addEventListener('DOMContentLoaded', () => {
    // Mostrar la alerta de instrucciones al cargar la página
    document.getElementById('alert-box').style.display = 'block';
});

function encriptar() {
    var inputText = document.getElementById('input-text').value;
    if (esTextoValido(inputText)) {
        var textoEncriptado = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        document.getElementById('output-text').textContent = textoEncriptado;
        document.getElementById('output-text').classList.remove('sin-mensaje');
    } else {
        mostrarAlerta();
    }
}

// Desencriptar texto
function desencriptar() {
    var inputText = document.getElementById('input-text').value;
    if (esTextoValido(inputText)) {
        var textoDesencriptado = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        document.getElementById('output-text').textContent = textoDesencriptado;
        document.getElementById('output-text').classList.remove('sin-mensaje');
    } else {
        mostrarAlerta();
    }
}

// Validar el texto ingresado
function esTextoValido(texto) {
    return /^[a-z\s]*$/.test(texto);
}

// Mostrar alerta
function mostrarAlerta() {
    var cuadroAlerta = document.getElementById('alert-box');
    cuadroAlerta.style.display = 'block';
    cuadroAlerta.style.opacity = '1';
}

// Cerrar alerta
function cerrarAlerta() {
    var cuadroAlerta = document.getElementById('alert-box');
    cuadroAlerta.style.opacity = '0';
    setTimeout(function() {
        cuadroAlerta.style.display = 'none';
    }, 300);
}


function copiarTexto() {
    let output = document.getElementById('output-text').textContent;
    navigator.clipboard.writeText(output).then(() => {
        mostrarMensaje('Texto copiado al portapapeles');
        document.getElementById('pegar-boton').style.display = 'block'; // Muestra el botón de pegar
    });
}

function limpiarTexto() {
    document.getElementById('input-text').value = '';
    document.getElementById('output-text').textContent = 'No hay mensaje';
}

function pegarTexto() {
    if (confirm('¿Desea pegar el resultado encriptado en la sección de entrada?')) {
        navigator.clipboard.readText().then(text => {
            document.getElementById('input-text').value = text;
        });
    }
}

function cerrarAlerta() {
    document.getElementById('alert-box').style.display = 'none';
}

function mostrarMensaje(mensaje) {
    let mensajeElemento = document.createElement('div');
    mensajeElemento.className = 'mensaje-copiado';
    mensajeElemento.textContent = mensaje;
    
    document.body.appendChild(mensajeElemento);
    mensajeElemento.style.display = 'block';
    
    setTimeout(() => {
        mensajeElemento.style.display = 'none';
        mensajeElemento.remove();
    }, 2000); // El mensaje desaparece después de 2 segundos
}
