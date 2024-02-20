import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatRippleModule} from '@angular/material/core';

const matModules = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatRippleModule
];

@NgModule({
  declarations: [],
  imports: [...matModules],
  exports: [...matModules]
})
export class MaterialModule {}
