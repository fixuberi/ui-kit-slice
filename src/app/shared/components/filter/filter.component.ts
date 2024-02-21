import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  MAT_MENU_DEFAULT_OPTIONS,
  MatMenuTrigger,
} from '@angular/material/menu';
import { FilterOption } from '../../types/filter.types';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [
    { provide: MAT_MENU_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
})
export class FilterComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

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
    this.isExpandedMenu = false;
    this.menuTrigger.closeMenu();

    this.change.emit(this.selectedOption?.value);
  }

  resetSelection(event: MouseEvent) {
    event.stopPropagation();

    this.selectedOption = null;
    this.change.emit(null);
  }
}
