import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  imports: [
    MenubarModule,
    ButtonModule,
    FormsModule,
    ToggleSwitchModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  darkMode = false;

  menuItems = [
    {
      label: 'Home',
      icon: 'pi pi-home',
    }
  ];
}