const turnOnButton = document.getElementById("turn-on");
const turnOffButton = document.getElementById("turn-off");
const lamp = document.getElementById("lampada");

function isBrokenLamp(){
    return lamp.src.indexOf ("quebrada") > -1
    // o js vai procurar o arquivo quebrada.jpg, se encontrar, a imagem quebrada vai aparecer.
    //indexOf retorna o índice da primeira ocorrência de um determinado elemento em um array. Se o elemento não for encontrado, ele retorna -1.
}

function turnOn() {
    if (!isBrokenLamp()){
        lamp.src = "./src/imagens/ligada.jpg";
        //se a lampada nao estiver quebrada, trocar a imagem para a lampada ligada
    }
  
};

function turnOff() {
    if (!isBrokenLamp()){
        lamp.src = "./src/imagens/desligada.jpg";
        // se a lampada nao estiver quebrada, trocar a imagem para a lampada desligada
        
    }
    
};

function brokenLamp(){
    if (isBrokenLamp){
        lamp.src = "./src/imagens/quebrada.jpg"
    }
    
};


lamp.addEventListener("mouseover", turnOn);
lamp.addEventListener("mouseleave", turnOff);
lamp.addEventListener("click", brokenLamp);