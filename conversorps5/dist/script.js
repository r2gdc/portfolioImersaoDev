//comentado: Ramon R G Camargo v1 23/03/2021. Calculo de valor convertendo com valor informado de conversão

var dolar = prompt("qual valor do dolar")
var dolarInt = parseFloat(dolar)
var ps5 = prompt("qual o valor do ps5")
var ps5Int = parseFloat (ps5)
var valorReal = dolarInt*ps5Int
var valorRealDec = valorReal.toFixed(2)
alert(valorRealDec)


//Revisão
//variaveis var - parseInt - parseFloat - * - .toFixed() - alert -