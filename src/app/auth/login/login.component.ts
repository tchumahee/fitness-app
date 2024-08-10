import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public form: FormGroup = new FormGroup({});

  constructor(
    //private loginService: LoginService,
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

  public login(form: any) {
    this.router.navigate(['home']);
    // if (this.loginService.login(form.value.username, form.value.password)) {
    //   this.router.navigate(['events']);
    // } else {
    //   this.snackBar.open("Podaci nisu dobri", undefined, {
    //     duration: 2000
    //   })
    // }
  }
}
