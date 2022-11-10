import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  pageTitle = 'Endevor Challenge';
  constructor() { }

  ngOnInit(): void {
  }

}
