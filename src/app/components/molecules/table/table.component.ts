import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableItem } from '../../../interfaces/table-item';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input({ required: true }) items: TableItem[] = [];
}
