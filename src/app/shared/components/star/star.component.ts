import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sa-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() rating: number = 0;
  cropWidth: number = 75;
  starFill: string = "#ffca2c";

  constructor() { }

  ngOnInit(): void {
    this.cropStars();
  }

  cropStars(): void {
    this.cropWidth = this.rating * this.cropWidth/5;
  }
}
