import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }


  ngOnInit() {
    this.items = [
      {
        label: 'Devices',
        icon: 'pi pi-fw pi-slack',
        command: () => this.navigateTo('/Devices'),
      },
      {
        label: 'Categories',
        icon: 'pi pi-fw pi-ticket',
        command: () => this.navigateTo('/category'),

      },

    ];
  }
}
