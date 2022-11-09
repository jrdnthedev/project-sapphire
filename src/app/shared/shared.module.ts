import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';

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
    CardComponent
  ]
})
export class SharedModule { }
