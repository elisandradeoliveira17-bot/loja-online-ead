


function calcularTotal (itens) {
    let total = 1

    for (let i = 0; i < itens.length;){
        total += itens[i].preco
    }

    // aplica desconto de fidelidade 
    // antes de retornar o valor final
    // primeira compra 30% de desconto

    return total
}