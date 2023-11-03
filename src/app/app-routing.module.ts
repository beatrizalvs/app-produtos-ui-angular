import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutosComponent } from './pages/lista-produtos/lista-produtos.component';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';
import { EditarProdutoComponent } from './pages/editar-produto/editar-produto.component';

const routes: Routes = [
    {
    path: 'produtos', component: ListaProdutosComponent
  },
  {
    path: 'produtos/cadastrar', component: CadastroProdutoComponent
  },
  {
    path: 'produtos/editar/:id', component: EditarProdutoComponent
  },
  {
    path: 'produtos/deletar/:id', component: ListaProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
