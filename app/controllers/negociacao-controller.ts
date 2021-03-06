import { Negociacoes } from '../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void {

        const negociacao = this.criaNegociacao();

        this.negociacoes.adiciona(negociacao);

        this.limparFormulario();       
    }


    criaNegociacao(): Negociacao {

        const encontraTodosHifens = /-/g; //Encontra todos os hífens = /-    Em qualquer lugar = /g

        const date = new Date(this.inputData.value.replace(encontraTodosHifens, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {

        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }

}