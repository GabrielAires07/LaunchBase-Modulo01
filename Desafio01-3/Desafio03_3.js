const usuarios = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5], //276,8 - 118,7 == 158,1
      despesas: [85.3, 13.5, 19.9] //118,7 
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3], //284 - 317,4 == -33,4
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3], //515,6 - 480,1 == 35,2
      despesas: [450.2, 29.9]
    }
  ]


let somaReceitas = [];
let somaDespesas = [];
let resultado = [];
let somaR = 0;
let somaD = 0;

function somaNumeros() {
    for (let i = 0; i < usuarios.length; i++) {

        for (let a = 0; a < usuarios[i].receitas.length; a++) {
            somaR += usuarios[i].receitas[a];
        }
        somaReceitas[i] = somaR;
        somaR = 0;

        for (let b = 0; b < usuarios[i].despesas.length; b++) {
            somaD += usuarios[i].despesas[b];
        } 
        somaDespesas[i] = somaD;
        somaD = 0;

       
        resultado[i] = somaReceitas[i] - somaDespesas[i];
        if (resultado[i] >= 0) {
            console.log(`${usuarios[i].nome} possui saldo POSITIVO de: ${resultado[i]}.`)
        } else {
            console.log(`${usuarios[i].nome} possui saldo NEGATIVO de: ${resultado[i]}.`)
        }
        
    }
}

somaNumeros();







