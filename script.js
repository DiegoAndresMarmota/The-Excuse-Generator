let who = ['the dog ', 'my granma ', 'his turtle ', 'my bird '];
let verb = ['eat ', 'pissed ', 'crushed ', 'broked '];
let what = ['my bed ', 'my computer ', 'the paperwork '];
let when = ['before the class ', 'right on time ', 'when I finished ', 'during my lunch ', 'while I was praying '];

let excuses = [who, verb, what, when]

let getExcuse = (excusas) => {

    let sentence = [];

    for (let i = 0; i < excusas.length; i++) {

        let random = Math.floor(Math.random() * excusas[i].length);
        sentence.push(excusas[i][random]);
    }
    let finalSentence = sentence.join('')
    return finalSentence;
}

function generarExcusa() {
    document.querySelector('#boton').innerHTML = '<p class="excusa">' + getExcuse(excuses) + '</p>';
}

document.querySelector('#boton').addEventListener('click', generarExcusa);
document.querySelector('#boton').addEventListener('click', function () {
    document.querySelector('#boton').style.background = '#faf73e';
});