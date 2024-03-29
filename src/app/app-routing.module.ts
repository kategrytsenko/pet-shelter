import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { ReportPageComponent } from './components/report-page/report-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdoptionPageComponent } from './components/adoption-page/adoption-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'help',
    component: HelpPageComponent
  },
  {
    path: 'adoption',
    component: AdoptionPageComponent
  },
  {
    path: 'report',
    component: ReportPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
