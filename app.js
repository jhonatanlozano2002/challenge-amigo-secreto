// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nombre = amigoInput.value;

    if (nombre.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este amigo ya ha sido agregado.');
        amigoInput.value = '';
        return;
    }

    amigos.push(nombre);
    amigoInput.value = '';
    actualizarListaDeAmigos();
}

function actualizarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}

function sortearAmigo() {
    if (amigos.length <= 1) {
        alert('Necesitas al menos dos amigos para el sorteo.');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `¡El amigo secreto es: **${amigoSorteado}**! 🎉`;
}

function reiniciarJuego() {
    amigos = [];
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}