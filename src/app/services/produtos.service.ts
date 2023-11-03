import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IProduto } from "../interfaces/produtoInterface";


@Injectable({
    providedIn: 'root',
})

export class PordutosService {
    api = 'http://localhost:8080/api/produtos';

    constructor(private http: HttpClient){}

    buscarTodos(){
        return this.http.get<IProduto[]>(this.api);
    }
            
   
}

