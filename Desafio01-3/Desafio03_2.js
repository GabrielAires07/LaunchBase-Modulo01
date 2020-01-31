const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
  ]

  function checaSeUsuarioUsaCss (usuarios) {
      for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].tecnologias.includes('CSS')) {
                console.log(`O usuário ${usuarios[i].nome} trabalha com CSS!`)
            } else {
                console.log(`O usuário ${usuarios[i].nome} não trabalha com CSS!`)
            }
        }
    }

checaSeUsuarioUsaCss(usuarios);