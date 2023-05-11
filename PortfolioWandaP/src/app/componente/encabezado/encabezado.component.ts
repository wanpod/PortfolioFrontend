import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  miPorfolio:any;

  
  constructor(private datosPortfolio: PorfolioService){

    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data) //con esto, el componente puede acceder a los datos
      this.miPorfolio=data;
    });
    
  }


}
