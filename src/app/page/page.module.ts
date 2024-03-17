import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ]
})
export class PageModule { }
