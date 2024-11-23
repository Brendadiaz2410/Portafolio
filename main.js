var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Docente Universitaria')
    .pauseFor(2)
    .deleteAll()
    .typeString('El conocimiento es la llave que abre las puertas del futuro,')
    .pauseFor(2)
    .deleteChars(44)
    .typeString('y la curiosidad es el motor que nos impulsa a descubrirlo.')
    .pauseFor(2)
    .deleteChars(74)
    .typeString('<strong>Enseñar no es solo transmitir información,</strong>')
    .pauseFor(2)
    .deleteChars(36)
    .typeString('<strong>Es encender una chispa de pasión y curiosidad que dure toda la vida.</strong>')
    .pauseFor(2500)
    .start();