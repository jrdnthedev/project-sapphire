import { Component, Input, OnInit } from '@angular/core';
import { ITeam } from 'src/app/features/team/interface/team';

@Component({
  selector: 'sa-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
