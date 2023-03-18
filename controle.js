//const form = document.getElementById('#form')
const form = document.querySelector('#form')
const descrTransacaoInput = document.querySelector('#descricao')
const valorTransacaoInput = document.querySelector('#montante')
const balancoH1 = document.querySelector('#balanco')
const receitasP = document.querySelector('#din-positivo')
const despesasP = document.querySelector('#din-negativo')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const descrTransacao = descrTransacaoInput.value.trim()
    const valorTransacao = valorTransacaoInput.value.trim()

    if (descrTransacao === '' || valorTransacao === '') {
        alert('Informe os dados da transação!')
        return
    }

    const idTransacao = parseInt(Math.random() * 10000)

    const transacao = {
        id: idTransacao,
        descricao: descrTransacao,
        valor: parseFloat(valorTransacao),
    }

    somaAoSaldo(transacao)

    descrTransacaoInput.value = ''
    valorTransacaoInput.value = ''

    somaReceitaOuDespesa(transacao)

})

function somaAoSaldo(transacao) {
    let total = balancoH1.innerHTML.replace('R$' , '')
    total = parseFloat(total)
    total += transacao.valor
    // Template string
    balancoH1.innerHTML = `R$${total.toFixed(2)}`
}

function somaReceitaOuDespesa(transacao) {
    const elemento = transacao.valor > 0 ? receitasP : despesasP
    const substituir = transacao.valor > 0 ? '+ R$' : '- R$'
    let valorAtual = elemento.innerHTML.replace(substituir, '')
    valorAtual = parseFloat(valorAtual)
    valorAtual += Math.abs(transacao.valor)
    elemento.innerHTML = `${substituir}${valorAtual}`
}