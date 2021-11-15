import { Component, Input, OnInit } from '@angular/core';
import Image from '../../models/image.model';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  @Input() images!: Image[];

  constructor() { }

  ngOnInit(): void {
  }

}
