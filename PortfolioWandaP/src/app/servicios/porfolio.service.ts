import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any>{ //crear metodo, debe retornar un Observable
    return this.http.get('./assets/data/data.json');//la idea es escribir una URL, por la cual nos vamos a comunicar y enviar un request
    //para obtener los datos
  }

}
