const numeroValido = (mensagem, mensagemErro) => {
    let numero = parseInt(prompt(mensagem))

    while (isNaN(numero) || numero <= 0) {
        alert(mensagemErro)
        numero = parseInt(prompt(mensagem))
    }
    return numero
}

let numeroLinhasPrimeiraMatriz = numeroValido(
    `digite um numero de linhas para a primeira matriz`,
    `digite um numero de linhas valido`
)

let numeroColunasPrimeiraMatriz = numeroValido(
    `digite um numero de colunas para a primeira matriz`,
    `digite um numero de colunas valido`
)


let numeroLinhasSegundaMatriz = numeroValido(
    `digite um numero de linhas para a primeira matriz`,
    `digite um numero de linhas valido`
)

let numeroColunasSegundaMatriz = numeroValido(
    `digite um numero de colunas para a primeira matriz`,
    `digite um numero de colunas valido`
)



let primeiraMatriz = []

for (let i = 0; i < numeroLinhasPrimeiraMatriz; i++) {
    let linha = []

    for (let j = 0; j < numeroColunasPrimeiraMatriz; j++) {
        linha.push(Math.floor(Math.random() * 50))
    }
    primeiraMatriz.push(linha)
}

let segundaMatriz = []

for (let i = 0; i < numeroLinhasSegundaMatriz; i++) {
    let linha = []

    for (let j = 0; j < numeroColunasSegundaMatriz; j++) {
        linha.push(Math.floor(Math.random() * 50))
    }
    segundaMatriz.push(linha)
}



const mostrarMatrizes = (primeiraMatriz, segundaMatriz) => {
    document.write(`<h2 class="matriz-h2">as matrizes são:</h2>`)

    document.write(`<div class="table-flex">`)

    document.write(`<table>`)

    for (let i = 0; i < numeroLinhasPrimeiraMatriz; i++) {
        document.write(`<tr>`)

        for (let j = 0; j < numeroColunasPrimeiraMatriz; j++) {
            document.write(`<td>${primeiraMatriz[i][j]}</td>`)
        }
        document.write(`</tr>`)
    }

    document.write(`</table>`)


    document.write(`<table>`)

    for (let i = 0; i < numeroLinhasSegundaMatriz; i++) {
        document.write(`<tr>`)

        for (let j = 0; j < numeroColunasSegundaMatriz; j++) {
            document.write(`<td>${segundaMatriz[i][j]}</td>`)
        }
        document.write(`</tr>`)
    }

    document.write(`</table>`)

    document.write(`</div>`)

}

mostrarMatrizes(primeiraMatriz, segundaMatriz)



const opostaMatrizes = (primeiraMatriz, segundaMatriz) => {
    document.write(`<h2 class="matriz-h2">as matrizes opostas são:</h2>`)

    document.write(`<div class="table-flex">`)

    document.write(`<table>`)

    for (let i = 0; i < numeroLinhasPrimeiraMatriz; i++) {
        document.write(`<tr>`)

        for (let j = 0; j < numeroColunasPrimeiraMatriz; j++) {
            document.write(`<td>${primeiraMatriz[i][j] * (-1)}</td>`)
        }
        document.write(`</tr>`)
    }

    document.write(`</table>`)


    document.write(`<table>`)

    for (let i = 0; i < numeroLinhasSegundaMatriz; i++) {
        document.write(`<tr>`)

        for (let j = 0; j < numeroColunasSegundaMatriz; j++) {
            document.write(`<td>${segundaMatriz[i][j] * (-1)}</td>`)
        }
        document.write(`</tr>`)
    }

    document.write(`</table>`)

    document.write(`</div>`)

}

opostaMatrizes(primeiraMatriz, segundaMatriz)



const transposicaoMatrizes = (primeiraMatriz, segundaMatriz) => {
    document.write(`<h2 class="matriz-h2">a transposição das matrizes é:</h2>`)

    let primeiraMatrizTransposta = []
    let segundaMatrizTransposta = []

    document.write(`<div class="table-flex">`)

    document.write(`<table>`)

    for (let i = 0; i < primeiraMatriz[0].length; i++) {
        primeiraMatrizTransposta[i] = []
        document.write(`<tr>`)

        for (let j = 0; j < primeiraMatriz.length; j++) {
            primeiraMatrizTransposta[i][j] = primeiraMatriz[j][i]
            document.write(`<td>${primeiraMatrizTransposta[i][j]}`)
        }
    }

    document.write(`</table>`)



    document.write(`<table>`)

    for (let i = 0; i < segundaMatriz[0].length; i++) {
        segundaMatrizTransposta[i] = []
        document.write(`<tr>`)

        for (let j = 0; j < segundaMatriz.length; j++) {
            segundaMatrizTransposta[i][j] = segundaMatriz[j][i]
            document.write(`<td>${segundaMatrizTransposta[i][j]}`)
        }
    }

    document.write(`</table>`)

    document.write(`</div>`)

}

transposicaoMatrizes(primeiraMatriz, segundaMatriz)



const adicaoMatrizes = (primeiraMatriz, segundaMatriz) => {
    document.write(`<h2 class="matriz-h2">a soma das matrizes é:</h2>`)

    let matrizResultado = []

    if (primeiraMatriz.length != segundaMatriz.length || primeiraMatriz[0].length != segundaMatriz[0].length) {
        document.write(`<h3 class="matriz-h3">as matrizes possuem dimensões diferentes</h3>`)
    } else {
        document.write(`<table>`)

        for (let i = 0; i < primeiraMatriz.length; i++) {
            matrizResultado[i] = []
            document.write(`<tr>`)
            for (let j = 0; j < primeiraMatriz[0].length; j++) {
                matrizResultado[i][j] = primeiraMatriz[i][j] + segundaMatriz[i][j]
                document.write(`<td>${matrizResultado[i][j]}</td>`)
            }
            document.write(`</tr>`)
        }
        document.write(`</table>`)
    }
}

adicaoMatrizes(primeiraMatriz, segundaMatriz)



const subtracaoMatrizes = (primeiraMatriz, segundaMatriz) => {
    document.write(`<h2 class="matriz-h2">a subtração das matrizes é:</h2>`)

    let matrizResultado = []

    if (primeiraMatriz.length != segundaMatriz.length || primeiraMatriz[0].length != segundaMatriz[0].length) {
        document.write(`<h3 class="matriz-h3">as matrizes possuem dimensões diferentes</h3>`)
    } else {
        document.write(`<table>`)

        for (let i = 0; i < primeiraMatriz.length; i++) {
            matrizResultado[i] = []
            document.write(`<tr>`)
            for (let j = 0; j < primeiraMatriz[0].length; j++) {
                matrizResultado[i][j] = primeiraMatriz[i][j] - segundaMatriz[i][j]
                document.write(`<td>${matrizResultado[i][j]}</td>`)
            }
            document.write(`</tr>`)
        }
        document.write(`</table>`)
    }
}

subtracaoMatrizes(primeiraMatriz, segundaMatriz)



const multiplicacaoMatrizes = (primeiraMatriz, segundaMatriz) => {
    document.write(`<h2 class="matriz-h2">a multiplicação das matrizes é:</h2>`)

    let matrizResultado = []

    if (primeiraMatriz[0].length != segundaMatriz.length) {
        document.write(`<h3 class="matriz-h3">as matrizes possuem dimensões diferentes</h3>`)
    } else {

        document.write(`<table>`)

        for (let i = 0; i < primeiraMatriz.length; i++) {
            matrizResultado[i] = []
            document.write(`<tr>`)

            for (let j = 0; j < segundaMatriz[0].length; j++) {
                let soma = 0

                for (let k = 0; k < segundaMatriz.length; k++) {
                    soma += primeiraMatriz[i][k] * segundaMatriz[k][j]
                }
                matrizResultado[i][j] = soma
                document.write(`<td>${matrizResultado[i][j]}</td>`)
            }
            document.write(`</tr>`)
        }
        document.write(`</table>`)
    }
}

multiplicacaoMatrizes(primeiraMatriz, segundaMatriz)



document.write(`<span class="spacing-top"></span>`)

document.write(`<a href="explicacoes.html"><button>explicações</button></a>`)

document.write(`<span class="spacing-bottom"></span>`)