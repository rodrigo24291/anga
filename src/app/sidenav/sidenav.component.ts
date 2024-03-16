



import { Component,ViewChild, ElementRef } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(private elementRef: ElementRef, private SidenavService:SidenavService) {}
  togle:boolean=false;

showMenu(){

  
  this.togle=!this.togle
  
  const menuElement = this.elementRef.nativeElement.querySelector('.navlist-mobil');
  
  
  const mobil = this.elementRef.nativeElement.querySelector('.mobil');
  if (menuElement && this.togle)  {
    this.SidenavService.Toogle=true;
    menuElement.classList.add('block');
    mobil.classList.remove('h-14');
    mobil.classList.add('h-2/3');
  }

  if (menuElement && !this.togle)  {
    this.SidenavService.Toogle=true;
    menuElement.classList.add('hidden');
    menuElement.classList.remove('block');
    mobil.classList.remove('h-2/3');
    mobil.classList.add('h-14')
  }

}}
