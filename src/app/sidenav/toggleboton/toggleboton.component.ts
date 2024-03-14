import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toggleboton',
  templateUrl: './toggleboton.component.html',
  styleUrls: ['./toggleboton.component.css']
})
export class TogglebotonComponent {
  
  @Output() Toogle:EventEmitter<boolean>=new EventEmitter()


showMenu(){
  console.log('hola');
  this.Toogle.emit();
}


}
