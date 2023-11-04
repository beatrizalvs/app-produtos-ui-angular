import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/interfaces/produtoInterface';
import { PordutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit{

  produtos: IProduto[] = [];

  constructor(private produtoService: PordutosService) {}

  ngOnInit(){
    this.produtoService.buscarTodos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => {
        console.error();
      }
      );
  }

  remover(id: number){
    this.produtos = this.produtos.filter((produtos => produtos.id !== id));
  }
 
}
