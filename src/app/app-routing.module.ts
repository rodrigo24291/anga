import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { AboutComponent } from './page/about/about.component';
import { SkillComponent } from './page/skill/skill.component';
import { ContactComponent } from './page/contact/contact.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';

const routes: Routes = [
  {
    path:'home',
    component:InicioComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  
  { path: 'skill', component:SkillComponent },
  { path: 'project', component:PortfolioComponent },
  { path: 'contact', component:ContactComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
