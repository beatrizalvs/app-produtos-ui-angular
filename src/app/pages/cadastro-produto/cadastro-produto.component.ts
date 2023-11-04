import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduto } from 'src/app/interfaces/produtoInterface';
import { PordutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  
  constructor(private produtoService: PordutosService){}

  produtoForm = new FormGroup({
    produto: new FormControl('', Validators.required),
    codigoBarras: new FormControl('', Validators.required),
    preco: new FormControl(0)
  })

  enviar(){
    const produto: IProduto = this.produtoForm.value as IProduto;
    
    this.produtoService.cadastrarProduto(produto).subscribe(
      (result) => {
        Swal.fire(
          "Usuário cadastrado com sucesso"
        );
      },
      (error) => {
        const {message} = error;
        Swal.fire("Erro", message);

      }
    )

  }
  
}
