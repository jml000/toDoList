import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
 //template:"<p>Aqui iria un empleado</p>",
  styleUrls: ['./empleado.component.css']
 //styles:["p{background-color:red}"]
})
export class EmpleadoComponent implements OnInit{

  nombre = "Jefferson";
  apellido = "Miranda";
  edad = 23;
  textoReg = "No hay nadie registrado";
  empresa = "Google"

/*  getEdad(){
    return this.edad;
  }*/

  habilitarCuadro=false;
  userReg = false;

  constructor(){}

  getRegistroUser(){
    this.userReg = true;
  }

  setUsuarioRegistrado(event: Event){
    //alert("El usuario se acaba de registrar");
    if((<HTMLInputElement> event.target).value == "si")
      this.textoReg = "El usuario se acaba de registrar"
    else
      this.textoReg = "No hay nadie registrado"
  }
  
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
