import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterOption } from '../../types/filter.types';
import { MAT_MENU_DEFAULT_OPTIONS } from '@angular/material/menu';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [
    {provide: MAT_MENU_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class FilterComponent implements OnInit {
  @Input() label: string = '';
  @Input() options: FilterOption[] = [];

  @Output() change = new EventEmitter<FilterOption['value'] | null>();

  isExpandedMenu = false;

  constructor() {}

  ngOnInit() {}

  selectedOption: FilterOption | null = null;
  toggleSelection(option: FilterOption, event: MouseEvent) {
    event.stopPropagation();

    this.selectedOption = option;
  }

  submitSelection(event: MouseEvent) {
    this.change.emit(this.selectedOption?.value)
  }

  resetSelection(event: MouseEvent) {
    event.stopPropagation();

    this.selectedOption = null;
    this.change.emit(null);
  }

  stopClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
