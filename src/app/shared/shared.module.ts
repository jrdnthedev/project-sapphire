import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './components/star/star.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    TableComponent,
    CardComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    TableComponent,
    CardComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
