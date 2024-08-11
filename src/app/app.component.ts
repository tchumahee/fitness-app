import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitness-app';

  constructor(
    private router: Router,
    ) { }

  public logIn() {
    this.router.navigate(['./auth/login']);
  }

  public showFitnessPrograms() {
    this.router.navigate(['./fitness-programs']);
  }

  public showHome() {
    this.router.navigate(['./']);
  }
}
