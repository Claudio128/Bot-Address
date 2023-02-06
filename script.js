'use strict';

const preencherFormulario = (dados) => {
    document.getElementById('endereco').value = dados.logradouro;
    document.getElementById('cidade').value = dados.localidade;
    document.getElementById('bairro').value = dados.bairro;
    document.getElementById('estado').value = dados.uf;
}

const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const dados = await response.json();
    preencherFormulario(dados);
}

document.getElementById('botao').addEventListener('click', pesquisarCep);