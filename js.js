function calcular() {
    // Atribuindo os valores dos campos de entrada
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = parseFloat(document.getElementById('n3').value);
    let n4 = parseFloat(document.getElementById('n4').value);

    // Calculando o total
    let total = n1 + n2 + n3 + n4;

    // Calculando as porcentagens
    let share1 = (n1 / total) * 100;
    let share2 = (n2 / total) * 100;
    let share3 = (n3 / total) * 100;
    let share4 = (n4 / total) * 100;

    let resultado = `
    <p>Motorola: ${share1.toFixed(1)}%</p>
    <p>Samsung: ${share2.toFixed(1)}%</p>
    <p>Apple: ${share3.toFixed(1)}%</p>
    <p>Oppo: ${share4.toFixed(1)}%</p>
`
document.getElementById('resultado').innerHTML = resultado
}