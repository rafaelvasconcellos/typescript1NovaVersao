import { Negociacao } from './../models/negociacao.js';
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.limparFormulario();
        console.log(negociacao);
    }
    criaNegociacao() {
        const encontraTodosHifens = /-/g; //Encontra todos os hífens = /-    Em qualquer lugar = /g
        const date = new Date(this.inputData.value.replace(encontraTodosHifens, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
