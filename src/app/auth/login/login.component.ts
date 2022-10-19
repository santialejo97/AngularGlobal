import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin!: FormGroup;
  constructor(private fb: FormBuilder, private authServices: AuthService) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }

  login() {
    console.log(this.formLogin.value);
    this.authServices.login(this.formLogin.value).subscribe((resp) => {
      console.log('respuesta', resp);
    });
  }
}
