import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaProdutosComponent } from './pages/lista-produtos/lista-produtos.component';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditarProdutoComponent } from './pages/editar-produto/editar-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaProdutosComponent,
    CadastroProdutoComponent,
    EditarProdutoComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
