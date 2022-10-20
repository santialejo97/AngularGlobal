import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, Observer } from 'rxjs';
import { RespDB } from 'src/app/interfaces/userAuth.interfaces';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin!: FormGroup;
  private observer: Observer<RespDB> = {
    next: (value: RespDB) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Bienvenido ${value.userDB.name}`,
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigateByUrl('/movie/popular');
    },
    error: (err: HttpErrorResponse) => {
      Swal.fire({
        icon: 'error',
        title: 'Error de credenciales',
        text:
          err.error.msg == undefined
            ? 'Ingresar credenciales'
            : `${err.error.msg}`,
      });
    },
    complete: () => {
      console.log('complete');
    },
  };

  constructor(
    private fb: FormBuilder,
    private authServices: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    this.authServices
      .login(this.formLogin.value)
      .pipe(delay(1000))
      .subscribe(this.observer);
  }

  validForm(): boolean {
    return !this.formLogin.valid;
  }

  validCampo(campo: string): string {
    if (campo == 'password') {
      return !this.formLogin.get(campo)?.valid &&
        this.formLogin.get(campo)?.touched
        ? 'Campo requerido, mayor o igual a 8 caracteres'
        : '';
    }
    return !this.formLogin.get(campo)?.valid &&
      this.formLogin.get(campo)?.touched
      ? 'Campo requerido o un email valido'
      : '';
  }
}
