function setup() {
    createCanvas(600, 400);
    somTrilha.loop();
  }
  
  function draw() {
    background(imagemEstrada);
    mostraAtores();
    mostraCarros();
    movimentaAtor();
    movimentaCarros();
    verificaColisao();
    marcaPonto();
    mostraPontos();
    mostraRecorde();
  }
  