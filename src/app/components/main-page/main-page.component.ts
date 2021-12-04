import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public safeURL1: SafeResourceUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/1jyHPKMAghQ');
  public safeURL2: SafeResourceUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/xcxKwYc9cnE');

  public animalsImages = [
    {
      src: 'assets/13.jpg'
    },
    {
      src: 'assets/2.jpeg'
    },
    {
      src: 'assets/3.jpeg'
    },
    {
      src: 'assets/4.jpeg'
    },
    {
      src: 'assets/5.jpeg'
    },
    {
      src: 'assets/6.jpeg'
    },
    {
      src: 'assets/7.jpeg'
    },
    // {
    //   src: 'assets/8.jpeg'
    // },
    {
      src: 'assets/9.jpeg'
    },
    {
      src: 'assets/10.jpeg'
    },
    // {
    //   src: 'assets/12.jpg'
    // },
    {
      src: 'assets/14.jpg'
    }
  ];

  constructor(private _sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {}

}
