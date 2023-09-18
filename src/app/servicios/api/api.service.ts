import { Injectable } from '@angular/core';
import {LoginI} from '../../modelos/login.interface';
import {ResponseI} from '../../modelos/response.interface';

import {ListapacientesI} from '../../modelos/listapacientes.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string ="https://github.com/G3ral/WebAPI.git"

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url+ "auth";
    return this.http.post<ResponseI>(direccion, form);
  }

  getAllPatients(Models:number):Observable<ListapacientesI[]>{
    let direccion = this.url + "Models/Usuario.cs=" + Models;
    return this.http.get<ListapacientesI[]>(direccion);
  }
}
