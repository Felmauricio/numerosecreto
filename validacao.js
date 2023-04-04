function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (numeroForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if (numeroForMaiorOUMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido, o número secretor precisar estar entre os números ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-short-wide"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-short-wide"></i></div>
        `
    }
}

function numeroForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOUMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})