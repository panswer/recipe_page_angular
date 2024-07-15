import { NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { SimpleTextComponent } from '../../atoms/simple-text/simple-text.component';
import { ListItemDirective } from '../../../directives/list-item.directive';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, NgTemplateOutlet, SimpleTextComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input({ required: true }) items: string[] = [];

  @ContentChild(ListItemDirective, { read: TemplateRef, static: true }) itemListTemplate?: TemplateRef<any>;
}
