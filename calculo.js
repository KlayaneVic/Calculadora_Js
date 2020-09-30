function calcular() {
    var n1, n2, operacao, escolha;
    n1 = parseFloat(document.getElementById("n1").value); 
    n2 = parseFloat(document.getElementById("n2").value);     
    escolha = parseInt(document.getElementById("escolha").value);
    switch (escolha) {
        case 0:
            operacao = n1 + n2;
            break;
        case 1:
            operacao = n1 - n2;
            break;
        case 2:
            operacao = n1 * n2;
            break;
        case 3:
            operacao = n1 / n2;
            break;      
        default:
            operacao = n1 % n2;
            break;
    }

    alert(operacao);
}