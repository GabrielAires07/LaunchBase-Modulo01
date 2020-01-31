// CALCULO DE APOSENTADORIA

const nome = 'Gabriel'
const sexo = 'M'
const idade = 75
const contribuicao = 35

if (sexo == 'F') {
    if ((contribuicao >= 30) && ((contribuicao + idade) >= 85)) {
        console.log(`${nome}, você pode se aposentar`);
    } else {
        console.log(`${nome}, você não pode se aposentar`);
    }
} else if (sexo == 'M') {
    if ((contribuicao >= 35) && ((contribuicao + idade) >= 95)) {
        console.log(`${nome}, você pode se aposentar`);
    } else {
        console.log(`${nome}, você não pode se aposentar`);
    }
}