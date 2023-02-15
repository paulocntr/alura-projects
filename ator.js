let yAtor = 370;
let xAtor = 100;
let colidiu = false;
let pontos = 0;
let recordPontos = 0;

function mostraAtores() {
  image(imagemAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yAtor < 370) {
      yAtor += 2;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (xAtor < 600 - 25) {
      xAtor += 2;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    if (xAtor > 0) {
      xAtor -= 2;
    }
  }
}

//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colidiu = collideRectCircle(
      xCarros[i],
      yCarros[i],
      compCarros,
      altCarros,
      xAtor,
      yAtor,
      20
    );
    if (colidiu) {
      somColidiu.play();
      verificaRecorde();
      pontos = 0;
      atorVolta();
      velocidadeCarros = [1, 1.5, 2.2, 1.5, 0.5, 4];
    }
  }
}

function atorVolta() {
  yAtor = 370;
  xAtor = 100;
}

function marcaPonto() {
  if (yAtor < 15) {
    somPontos.play();
    pontos += 1;
    atorVolta();
    aceleraCarros();
  }
}

function mostraPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text(pontos, width / 5, 28);
}

function mostraRecorde() {
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text(recordPontos, (width / 5) * 3, 28);
}

function verificaRecorde() {
  if (pontos > recordPontos) {
    recordPontos = pontos;
  }
}