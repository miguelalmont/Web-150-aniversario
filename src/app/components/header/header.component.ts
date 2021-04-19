import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logged: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      if (this.router.url.includes('home')) {
        this.logged = true;
      } else {
        this.logged = false;
      };
   });
  }

  ngOnInit(): void {}



}
