import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { AddpersonajeComponent } from './components/addpersonaje/addpersonaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainComponent, ListComponent, AddpersonajeComponent],
  exports:[MainComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
