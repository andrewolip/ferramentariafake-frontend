import { Ferramenta } from './Ferramenta';
import { Funcionario } from './Funcionario';

export class Emprestimo {
    id: number;
    ferramenta: Ferramenta;
    funcionario: Funcionario;
    dataInicio: Date;
    dataPrevistaEntrega: Date;
    dataEntrega: Date;
}