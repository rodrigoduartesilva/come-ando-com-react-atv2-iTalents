import { Aluno } from '../classes/Aluno.js';
const listaAlunosAntiga = [
    {
        nome: 'Rodrigo Duarte',
        idade: 43,
        grauEscolar: 'Superior'
    },
    {
        nome: 'Belinha Jonas',
        idade: 9,
        grauEscolar: 'Fundamental'
    },
    {
        nome: 'Samira Silva',
        idade: 13,
        grauEscolar: 'Médio'
    }
];

const alunos = [...listaAlunosAntiga];

const nome = window.prompt('Informe o nome do aluno: ');
const idade = window.prompt('Informe a idade do aluno: ');
const grauEscolar = window.prompt('Informe o grau escolar(Ensino Médio ou Fundamental): ');

const aluno = new Aluno(nome, idade, grauEscolar);

alunos.push(aluno);

function Main() {
    return (
        <>
            <h1>Atividade 2 - iTalents</h1>
            <h2>Escola Samira A Gata - Dados dos Alunos Cadastrados</h2>
            <ul>
                {alunos.map(aluno => (
                    <li>Aluno: {aluno.nome} - Idade: {aluno.idade} anos - {aluno.idade >= 18 ? 'Aluno Maior de Idade' : 'Aluno Menor de Idade'} - Grau Escolar: {aluno.grauEscolar}</li>
                ))}
            </ul>
        </>
    );
}

export default Main;