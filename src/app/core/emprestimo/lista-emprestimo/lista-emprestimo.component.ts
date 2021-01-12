import { EmprestimoService } from './../../services/emprestimo.service';
import { Emprestimo } from './../../models/Emprestimo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-emprestimo',
  templateUrl: './lista-emprestimo.component.html',
  styleUrls: ['./lista-emprestimo.component.css']
})
export class ListaEmprestimoComponent implements OnInit {

  emprestimos: Emprestimo[] = [];

  constructor(private router: Router, public emprestimoService: EmprestimoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.emprestimoService.getAll().subscribe((data: Emprestimo[])=>{
      this.emprestimos = data;
    });
  }

  remover(id: number) {
    Swal.fire({
      title: 'Atenção!',
      text: "Tem certeza que deseja excluir?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      
      if (result.isConfirmed) {
        this.emprestimoService.delete(id).subscribe(data => {
          Swal.fire(
            'Removido!',
            'O empréstimo selecionado foi removido com sucesso.',
            'success'
          )
          this.listar();
        });
        
      }
    })
    
    
  }

  devolverFerramenta(emprestimo: Emprestimo) {
    this.emprestimoService.devolverFerramenta(emprestimo).subscribe(res => {
      this.listar();  
    }, (err) => {
      this.listar();
    })
  }

  convertDate(timestamp: number) : string{
    return new Date(timestamp).toLocaleString();
  }

}
