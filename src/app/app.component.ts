import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public links: {title: string, router: string}[] = [
    {
      title: 'Головна',
      router: ''
    },
    {
      title:  'Як допомогти',
      router: '/help'
    },
    {
      title: 'Звітність',
      router: '/report'
    },
  ];
  public activeLink = this.links[0];
}
