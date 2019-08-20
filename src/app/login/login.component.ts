import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup

  constructor(private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null),
      'lastname': new FormControl(null),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null)
    });
  }
  onSubmit(){
    console.log(this.signupForm);
    
    if (this.signupForm.valid) {
      this.router.navigate(['/dashboard']);
    }
    // Al hacer submit tenemos que enviar datos y validar con la api.
    // Al cargar el home, si el usuario ha iniciado sesion, redirigir al dashboard 
    // https://material.angular.io/components/sidenav/overview#creating-a-responsive-layout-for-mobile-amp-desktop
    
  }

}
