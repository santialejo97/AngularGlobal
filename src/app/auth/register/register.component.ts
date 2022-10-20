import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {
  RespDB,
  RespDBRegister,
  UserRegister,
} from '../../interfaces/userAuth.interfaces';
import Swal from 'sweetalert2';
import { Observer } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public formRegister!: FormGroup;
  private observer: Observer<RespDBRegister> = {
    next: (value: RespDBRegister) => {
      console.log(value);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Bienvenido ${value.user.name}`,
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigateByUrl('/movie/popular');
    },
    error: (err: HttpErrorResponse) => {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Error de Data',
        text:
          err.error.msg == undefined
            ? 'Ingresar informacion requerida'
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
    this.formRegister = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      terminos: [false],
    });
  }

  register() {
    console.log(this.formRegister.value);
    const data: UserRegister = {
      name: this.formRegister.get('userName')?.value,
      email: this.formRegister.get('email')?.value,
      password: this.formRegister.get('password')?.value,
    };
    console.log(data);
    this.authServices.registerUser(data).subscribe(this.observer);
  }

  validarPassword() {
    return this.formRegister.get('password')?.value !=
      this.formRegister.get('confirmPassword')?.value &&
      this.formRegister.get('confirmPassword')?.touched
      ? 'No coinciden con la password'
      : '';
  }

  validCampo(campo: string): string {
    if (campo == 'password') {
      return !this.formRegister.get(campo)?.valid &&
        this.formRegister.get(campo)?.touched
        ? 'Campo requerido, mayor o igual a 8 caracteres'
        : '';
    }
    return !this.formRegister.get(campo)?.valid &&
      this.formRegister.get(campo)?.touched
      ? 'Campo requerido'
      : '';
  }
}
