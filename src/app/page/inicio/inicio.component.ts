import { Component, OnInit,ViewChild,ElementRef,AfterViewInit, } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  constructor(private elementref:ElementRef){

  }

 ngOnInit(): void {
  const options = {
    strings: ['Backend Developer', 'Front-End Developer', 'Full Stack Developer'], // Array de cadenas a escribir
    typeSpeed: 50, // Velocidad de escritura en milisegundos
    backSpeed: 30, // Velocidad de retroceso en milisegundos
    loop: true // Repetir la animación
  };


  new Typed(this.elementref.nativeElement.querySelector('.typedText'), options);
}
 }

