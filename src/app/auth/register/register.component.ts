import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public form: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, 
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public register(form: any) {
    this.router.navigate(['./auth/login']);
    // if (this.loginService.login(form.value.username, form.value.password)) {
    //   this.router.navigate(['events']);
    // } else {
    //   this.snackBar.open("Podaci nisu dobri", undefined, {
    //     duration: 2000
    //   })
    // }
  }

}
