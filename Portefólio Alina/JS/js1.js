/*function teoremaDePitagoras(c1, c2) {
    let catetos = (c1*c1) + (c2*c2);
    let hipotenusa = Math.sqrt(catetos)
    return hipotenusa;
}
console.log (teoremaDePitagoras(4,5))

let verdadeira = 5 == 0;
let falsa = 0;
let decimais = 2.11;
let textoFalsa = "";
let textoIndice = "Gabri";
let melhorPizza = "Pizza com ananás";
let carro = true;
let moto = false;
let undie = undefined;

console.log(verdadeira) 

function verificarSeExiste (array, a) {
    for (i = 0; i <= array.length; i++) {
        if (a === array[i]){
            return true
        }
    }
    return false
}
let arrayCoisas = [4, 8, "Olá", "Cucu"]
console.log(verificarSeExiste(arrayCoisas, 8));

function retornarMeio (array){

    if (array.length % 2 ===1){
        let meio = array[Math.floor(array.length/2)]
        return meio
    }
    else {
        meio = `${array[Math.floor(array.length/2 - 1)]} e ${array[Math.floor(array.length/2)]}`
        return meio
    }
}
 arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 console.log(retornarMeio(arrayNum))*/


 function diaEmPalavras(dia, mes, ano){
    if (ano < 2000 || ano > 2030) {
       return "Por favor introduza um ano entre 2000 e 2030."
    }
    else if ((ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0) && dia < 1 || dia > 29) {
       return "Por favor intorduza um dia entre 1 e 29."
    }
    else if (mes === 2 && (dia < 1 || dia > 28)) {
       return "Por favor introduza um dia entre 1 e 29."
    } else if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && (dia < 1 || dia > 30)) { 
       return "Por favor introduza um dia entre 1 e 30."
    } else if (dia < 1 || dia > 31 ) {
       return "Por favor introduza um dia entre 1 e 31."
    } else if (mes < 1 || mes > 12) {
       return "Por favor introduza um mês entre 1 e 12."
    }
    const mapaDias = new Map ([
          [1, "um"],
          [2, "dois"],
          [3, "tres"],
          [4, "quatro"],
          [5, "cinco"],
          [6, "seis"],
          [7, "sete"],
          [8, "oito"],
          [9, "nove"],
          [10, "dez"],
          [11, "onze"],
          [12, "doze"],
          [13, "treze"],
          [14, "catorze"],
          [15, "quinze"],
          [16, "dezasseis"],
          [17, "dezassete"],
          [18, "dezoito"],
          [19, "dezanove"],
          [20, "vinte"],
          [21, "vinte e um"],
          [22, "vinte e dois"],
          [23, "vinte e três"],
          [24, "vinte e quatro"],
          [25, "vinte e cinco"],
          [26, "vinte e seis"],
          [27, "vinte e sete"],
          [28, "vinte e oito"],
          [29, "vinte e nove"],
          [30, "trinta"],
          [31, "trinta e um"]
       ]);
    const mapaAnos = new Map ([
          [2000, "dois mil"],
          [2001, "dois mil e um"],
          [2002, "dois mil e dois"],
          [2003, "dois mil e tres"],
          [2004, "dois mil e quatro"],
          [2005, "dois mil e cinco"],
          [2006, "dois mil e seis"],
          [2007, "dois mil e sete"],
          [2008, "dois mil e oito"],
          [2009, "dois mil e nove"],
          [2010, "dois mil e dez"],
          [2011, "dois mil e onze"],
          [2012, "dois mil e doze"],
          [2013, "dois mil e treze"],
          [2014, "dois mil e catorze"],
          [2015, "dois mil e quinze"],
          [2016, "dois mil e dezasseis"],
          [2017, "dois mil e dezassete"],
          [2018, "dois mil e dezoito"],
          [2019, "dois mil e dezanove"],
          [2020, "dois mil e vinte"],
          [2021, "dois mil e vinte e um"],
          [2022, "dois mil e vinte e dois"],
          [2023, "dois mil e vinte e três"],
          [2024, "dois mil e vinte e quatro"],
          [2025, "dois mil e vinte e cinco"],
          [2026, "dois mil e vinte e seis"],
          [2027, "dois mil e vinte e sete"],
          [2028, "dois mil e vinte e oito"],
          [2029, "dois mil e vinte e nove"],
          [2030, "dois mil e trinta"],
       ]);
    const mapaMeses = new Map ([
          [1, "Janeiro"],
          [2, "Fevereiro"],
          [3, "Março"],
          [4, "Abril"],
          [5, "Maio"],
          [6, "Junho"],
          [7, "Julho"],
          [8, "Agosto"],
          [9, "Setembro"],
          [10, "Outubro"],
          [11, "Novembro"],
          [12, "Dezembro"]
       ]);
    return `${mapaDias.get(dia)} de ${mapaMeses.get(mes)} de ${mapaAnos.get(ano)}`
 }

 console.log(diaEmPalavras(2,2,2023))




