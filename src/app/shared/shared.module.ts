import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TableComponent,
    CardComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
