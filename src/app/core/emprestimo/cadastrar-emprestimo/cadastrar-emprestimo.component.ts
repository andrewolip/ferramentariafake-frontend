import { EmprestimoService } from './../../services/emprestimo.service';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';

import { Emprestimo } from './../../models/Emprestimo';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ferramenta } from '../../models/Ferramenta';
import { Funcionario } from '../../models/Funcionario';
import { FerramentaService } from '../../services/ferramenta.service';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-cadastrar-emprestimo',
  templateUrl: './cadastrar-emprestimo.component.html',
  styleUrls: ['./cadastrar-emprestimo.component.css']
})
export class CadastrarEmprestimoComponent implements OnInit {

  id: any;
  funcionarios: Funcionario[] = [];
  ferramentas: Ferramenta[] = [];

  selectedFerramenta: Ferramenta;
  selectedFuncionario: Funcionario;

  emprestimo: Emprestimo = new Emprestimo();
 
  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute,
    public funcionarioService: FuncionarioService,
    public ferramentaService: FerramentaService,
    public emprestimoService: EmprestimoService) { }

  ngOnInit(): void {
    this.funcionarioService.getAll().subscribe((data: Funcionario[])=>{
      this.funcionarios = data;
    });

    this.ferramentaService.getAll().subscribe((data: Ferramenta[])=>{
      this.ferramentas = data;
    });

    this.id =  this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.consultarEmprestimoPorId(this.id);
    }
  }

  submitForm() {
    this.emprestimoService.create(this.emprestimo).subscribe(res => {
      Swal.fire(
        'Sucesso!',
        'O empréstimo criado com sucesso.',
        'success'
      ).then((result) => {
        this.router.navigateByUrl('/lista-emprestimo');
      });      
    }, (err) => {      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: JSON.stringify(err.error.message)
      })
    });    
  }  

  consultarEmprestimoPorId(id: number) {
    this.emprestimoService.findById(id).subscribe((data: Emprestimo)=>{
      this.emprestimo.id = data.id;
      this.emprestimo.dataEntrega = data.dataEntrega;
      this.emprestimo.dataInicio = data.dataInicio;
      this.emprestimo.ferramenta = data.ferramenta;
      this.emprestimo.funcionario = data.funcionario;
    })
  }

}
