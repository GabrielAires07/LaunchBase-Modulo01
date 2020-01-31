const users = {
    nome: 'Gabriel',
    idade: 24,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O usuário ${users.nome} tem ${users.idade} anos e usa a tecnologia ${users.tecnologias[0].nome} com especialidade em ${users.tecnologias[0].especialidade}.`)