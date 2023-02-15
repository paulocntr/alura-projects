//variáveis dos atores

let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemEstrada;

let somColidiu;
let somPontos;
let somTrilha;

function preload() {
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");

  imagemCarros = [
    imagemCarro1,
    imagemCarro2,
    imagemCarro3,
    imagemCarro1,
    imagemCarro2,
    imagemCarro3,
  ];

  somColidiu = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
  somTrilha = loadSound("sons/trilha.mp3");
}
