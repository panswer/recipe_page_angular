import { NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { ListItemDirective } from '../../../directives/list-item.directive';

@Component({
  selector: 'app-sort-list',
  standalone: true,
  imports: [NgFor, NgTemplateOutlet],
  templateUrl: './sort-list.component.html',
  styleUrl: './sort-list.component.css'
})
export class SortListComponent {
  @Input({ required: true }) items: string[] = [];
  @ContentChild(ListItemDirective, { read: TemplateRef, static: true }) itemTemplate?: TemplateRef<any>;
}
