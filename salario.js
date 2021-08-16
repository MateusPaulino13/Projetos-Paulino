let js_qHoras; //Quantidade de horas trabalhadas
let js_vHora; //Valor das horas trabalhadas
let js_inss; //Valor de percentual de desconto do INSS
let js_tDescontos; //Valor de todos os descontos
let js_sBruto; //Valor salário Bruto
let js_sLiquido; //Valor salário liquído

//--Entrada de dados--//

js_qHoras = parseFloat(window.prompt('Informe a Quantidade de horas trabalhadas/M\u00eas: (135 - 180)'));
js_vHora = parseFloat(window.prompt('Informe o valor das horas trabalhas: (25 - 50)', 'Coloque aqui'));
js_inss = parseFloat(window.prompt('Informe o valor de desconto do INSS: (5 - 15)', 'Coloque aqui'));

//--Processamento de dados--//

js_sBruto = js_vHora * js_qHoras;
js_tDescontos = (js_inss/100) * js_sBruto;
js_sLiquido = js_sBruto - js_tDescontos;

//--Saída de sados--//

document.write('<p class="titulo"><b>DEMONTRÁTIVO DE CáLCULO DO SALÁRIO LIQUÍDO</b></p>');
document.write('<p>Quantidade de horas trabalhadas (135 - 180) = </p><b>' + js_qHoras + '</b>');

if (js_qHoras > 180){
    document.write('...(<b>Valor Máximo excedido!</b>)');
}
if (js_qHoras < 135){
    document.write('...(<b>Valor Mínimo Inválido!</b>)');
}

document.write('<p>Valor de Hora trabalhada (25 - 50) = </p><b>' + js_vHora + '</b>');
if (js_vHora >50){
    document.write('...(<b>Valor Máximo Excedido</b>)');
}
if (js_vHora < 25){
    document.write('...(<b>Valor Mínimo Inválido</b>)');
}

document.write('<p>Percentual de Desconto INSS (5 - 15) =</p><b>' + js_inss + '</b>');
if (js_inss > 15) {
    document.write('...(<b>Valor Máximo Excedido</b>)');
}
if (js_inss < 5){
    document.write('...(<b>Valor Mínimo Inválido</b>)');
}


document.write('<p>Salário Bruto = </p>' + js_sBruto);
document.write('<p>Total de desconto INSS = </p>' + js_tDescontos);
document.write('<p>Salário Líquido</p> =<b>' + js_sLiquido);

//--Saída de dados com aninhamento de if--//
if (js_sLiquido > 105000){
    document.write('...(<b>Salário Satisfatório! </b>maior que 6000)');
}
else {
    if (js_sLiquido > 6000){
        document.write('...(<b>Salário Satisfatório! </b>Maior que 6000)');
    }
    else {
        if (js_sLiquido > 3000){
            document.write('...(<b>Salário Moderado! </b> Maior que 3000)');
        }
        else {
            document.write('...(<b>Salário Insatisfatório! </b>Menor ou igual a  3000)');
        }
    }
}