import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss']
})
export class HelpPageComponent implements OnInit {
  public thanksImages = [
    {
      src: 'assets/thanks/5.jpeg'
    },
    {
      src: 'assets/thanks/1.jpeg'
    },
    {
      src: 'assets/thanks/4.jpeg'
    },
    // {
    //   src: 'assets/thanks/3.jpeg'
    // },
    {
      src: 'assets/thanks/2.jpeg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
