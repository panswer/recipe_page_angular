import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-title',
  standalone: true,
  imports: [],
  templateUrl: './sub-title.component.html',
  styleUrl: './sub-title.component.css'
})
export class SubTitleComponent {
  @Input() type: number = 1;
}
