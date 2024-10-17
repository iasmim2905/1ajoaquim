// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// depois da chuva, 10, drama
// Tinker Bell, 16, fantasia, aventura
// O Filho Protegido, 12, drama
// fala serio mãe,14 , drama 
//idade >= 10

 let campoIdade;
let campoFantasia;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("18");
  campoFantasia = createCheckbox("Gosta de drama?");
}


function draw() {
    background("rgb(223,18,18)");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(12, 0, 15));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "O Filho Protegido";
        } else {
            if (gostaDeFantasia) {
                return "fala serio mãe";
            } else {
                return "Tinker Bell";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "A viagem de chihiro";
        } else {
            return "O feitiço do tempo";
        }
    }
}

