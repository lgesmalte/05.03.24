var posicaoSuperiorInicial = 50,
    posicaoEsquerdaInicial = 50,
    posicaoSuperiorFinal = 500,
    posicaoEsquerdaFinal = 500,
    imgAvatar = document.getElementById('imgAvatar'),
    styleAvatar = window.getComputedStyle(imgAvatar);

var posicaoSuperior = 50,
    posicaoEsquerda = 50,
    topAvatar,
    leftAvatar;

imgAvatar.style.position = "absolute";
imgAvatar.style.top = posicaoSuperior + "px";
imgAvatar.style.left = posicaoEsquerda + "px";

function getTopStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(styleElement.getPropertyValue('top').replace("px",''));
}

function getTopStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(styleElement.getPropertyValue('left').replace("px",''));
}

function moverParaEsquerda() {
    console.clear();
    topAvatar = getTopStyle(imgAvatar);
    leftAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar >= posicaoEsquerdaInicial) {
        posicaoEsquerda -= 1;
        imgAvatar.style.left = posicaoEsquerda = "px";
    } else {
        console.error("Ops! chegou ao limite e não é possivel mover mais para a esquerda. Tente outro botão.");
    }
    console.log("Posição do avatar à esquerda: ", imgAvatar.style.left);
}