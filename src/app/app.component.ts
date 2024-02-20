import { Component, inject } from '@angular/core';
import { IconRegisterService } from './core/services/icon-register.service';
import { FilterOption } from './shared/types/filter.types';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  iconService = inject(IconRegisterService);
  snackBar = inject(MatSnackBar);

  filterOptions: Array<{ label: string; value: string | number }> = [
    { label: 'בקשה התקבלה', value: 1 },
    { label: 'הועבר לטיפול', value: 2 },
    { label: 'הופקה התחייבות', value: 3 },
  ];
  selectedFilter: FilterOption['value'] | null = null;

  filterChanged(value: FilterOption['value'] | null) {
    this.openSnackBar('Filter change, selected option - ' + value, 'Ok');
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
