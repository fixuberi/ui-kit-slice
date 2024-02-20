import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_RIPPLE_GLOBAL_OPTIONS, MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const matModules = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatRippleModule,
  MatDividerModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [],
  imports: [...matModules],
  exports: [...matModules],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } }
  ]
})
export class MaterialModule {}
