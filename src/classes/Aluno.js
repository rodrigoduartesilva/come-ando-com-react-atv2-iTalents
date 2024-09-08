import { Pessoa } from "./Pessoa";


export class Aluno extends Pessoa {
    constructor(nome, idade, grauEscolar) {
        super(nome, idade);
        this.grauEscolar = grauEscolar;
    }
}