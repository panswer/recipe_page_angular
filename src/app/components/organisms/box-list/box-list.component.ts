import { Component, Input, OnInit } from '@angular/core';
import { SubTitleComponent } from '../../atoms/sub-title/sub-title.component';
import { ListComponent } from '../../molecules/list/list.component';
import { ListItemDirective } from '../../../directives/list-item.directive';

@Component({
  selector: 'app-box-list',
  standalone: true,
  imports: [SubTitleComponent, ListComponent, ListItemDirective],
  templateUrl: './box-list.component.html',
  styleUrl: './box-list.component.css'
})
export class BoxListComponent implements OnInit {
  @Input({ required: true }) preparationTime: Record<string, string> = {};
  preparationKeys: string[] = [];

  ngOnInit(): void {
    this.preparationKeys = Object.keys(this.preparationTime);
  }
}
