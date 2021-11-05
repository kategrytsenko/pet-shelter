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

  constructor(private _sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {}

}
