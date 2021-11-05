import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public activeLink: string = '';
  public links: { title: string, route: string }[] = [
    {
      title: 'Головна',
      route: '/'
    },
    {
      title: 'Як допомогти',
      route: '/help'
    },
    {
      title: 'Звітність',
      route: '/report'
    },
  ];

  constructor () {
  }

  ngOnInit (): void {
    this.activeLink = window.location.pathname;
  }

}
