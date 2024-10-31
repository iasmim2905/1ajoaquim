//cremes para cabelo
   
//creme skala,3,morango 2 em 1
//salon line,0 a 3,definição 
//pantene,8,máscara restauradora
//seda boom, +4,super hidratação
//belissé,+12,liso efeito


let campoIdade;
let campoFantasia;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "cremes para cabelo");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox ("Gosta de cremes?");

  
}

function draw() {
    background("#E4CAE9");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(15, 6, 15));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);

}
  function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "creme sksla";
        } else {
            if (gostaDeFantasia) {
                return "salon line";
            } else {
                return "pantene";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "seda boom";
        } else {
            return "belissé";
        }
    }
}
