let yCarros = [45, 100, 155, 215, 325, 268];
let xCarros = [700, 650, 600, 500, 550, 400];
let velocidadeCarros = [1, 1.5, 2.2, 1.5, 0.5, 4];
let compCarros = 50;
let altCarros = 30;

function mostraCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], compCarros, altCarros);
    xCarros[i] -= velocidadeCarros[i];
  }
}

function movimentaCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (verificaTela(xCarros[i])) {
      xCarros[i] = 650;
    }
  }
}

function aceleraCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    velocidadeCarros[i] += 0.2;
  }
}

function verificaTela(t) {
  return t + 50 < 0;
}
