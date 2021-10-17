import { Negociacao } from './../models/negociacao.js';

export class NegociacaoController {

    private inputData : HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona() {

        const encontraTodosHifens = /-/g; //Encontra todos os hífens = /-    Em qualquer lugar = /g
        const date = new Date(this.inputData.value.replace(encontraTodosHifens, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor  = parseFloat(this.inputValor.value);

        const negociacao = new Negociacao(
            date,
            quantidade,
            valor);

        console.log(negociacao);
    }

}