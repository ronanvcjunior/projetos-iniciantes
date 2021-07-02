let list = document.querySelectorAll('.list')

let nome = document.getElementById('nome')
let idade = document.getElementById('idade')
let data_nascimento = document.getElementById('data_nascimento')
let cep = document.getElementById('cep')
let endereco = document.getElementById('endereco')
let numero = document.getElementById('numero')
let bairro = document.getElementById('bairro')
let cidade = document.getElementById('cidade')
let estado = document.getElementById('estado')

function fabricarPessoa(nome, idade, data_nascimento, cep, endereco, numero, bairro, cidade, estado) {
    let pessoa = {}
    pessoa.nome = nome
    pessoa.idade = idade
    pessoa.data_nascimento = data_nascimento
    pessoa.cep = cep
    pessoa.endereco = endereco
    pessoa.numero = numero
    pessoa.bairro = bairro
    pessoa.cidade = cidade
    pessoa.estado = estado

    return pessoa
}

const pessoas = {
    thales: fabricarPessoa('Thales Diego Barbosa', '37', '08/04/1984', '83005550', 'Rua Joinville', '483', 'São Pedro', 'São José dos Pinhais', 'PR'),

    fabio: fabricarPessoa("Fábio André Moreira", "63", "23/02/1958",  "05844070", "Rua Elato", "139", "Jardim São Luís", "São Paulo", "SP"),

    vitor: fabricarPessoa("Vitor Diego de Paula", "47", "10/09/1974", "77002006", "Quadra 405 Norte Alameda 16", "467", "Plano Diretor Norte", "Palmas", "TO"),

    bianca: fabricarPessoa("Bianca Emily Rita da Costa", "64", "13/11/1957", "30575835", "Rua Francisco Castro Monteiro", "517", "Buritis", "Belo Horizonte", "MG"),

    rafael: fabricarPessoa( "Rafael Nicolas Melo", "48", "18/07/1973", "71693305", "Quadra 5", "633", "São Francisco (São Sebastião)", "Brasília", "DF")
}

function setPessoa(pessoa) {
    nome.value = pessoas[pessoa].nome
    idade.value = pessoas[pessoa].idade
    data_nascimento.value = pessoas[pessoa].data_nascimento
    cep.value =  pessoas[pessoa].cep
    endereco.value = pessoas[pessoa].endereco
    numero.value = pessoas[pessoa].numero
    bairro.value = pessoas[pessoa].bairro
    cidade.value = pessoas[pessoa].cidade
    estado.value = pessoas[pessoa].estado
    
}

for(let i=0; i < list.length; i++) {
    list[i].onclick = function() {
        let j = 0
        while (j < list.length) {
            list[j++].className = 'list'
        }
        list[i].className = 'list active'
    }
}


setPessoa('thales')
