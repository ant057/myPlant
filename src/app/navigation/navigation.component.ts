// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'plant-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  defaultElevation = 0;
  menuLinks = [
    { path: '/home', label: 'Home' },
    { path: '/home/plantlist', label: 'MyPlants'},
    { path: '/home/notificationsettings', label: 'Notification Settings'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(label: string) {
    const link = this.menuLinks.find(c => c.label === label);
    this.router.navigate([link.path]);
  }

}
