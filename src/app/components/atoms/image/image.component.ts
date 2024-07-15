import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  @Input({ required: true }) src: string = "";
  @Input({ required: false }) alt: string = "Alternative";
}
