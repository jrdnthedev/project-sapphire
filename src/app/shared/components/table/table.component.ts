import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sa-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableTitle: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
