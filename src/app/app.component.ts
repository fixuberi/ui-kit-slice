import { Component, inject } from '@angular/core';
import { IconRegisterService } from './core/services/icon-register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  iconService = inject(IconRegisterService)

  isExpandedMenu = false
  toggleMenu() {
    this.isExpandedMenu = !this.isExpandedMenu;
  }
}
