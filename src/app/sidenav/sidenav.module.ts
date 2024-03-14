import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { TogglebotonComponent } from './toggleboton/toggleboton.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavComponent,
    TogglebotonComponent
  ],
  exports:[SidenavComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SidenavModule { }
