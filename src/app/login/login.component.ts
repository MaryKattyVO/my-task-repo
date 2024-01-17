import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }
  login() {
    if (this.isValidInput()) {
      if (this.authService.login(this.username, this.password)) {
        this.router.navigate(['/tasks']);
      } else {
        this.showAlert('Usuario o contraseña incorrecto');
      }
    } else {
      this.showAlert('Por favor, ingrese el nombre de usuario y la contraseña.');
    }
  }

  isValidInput(): boolean {
    return this.username.trim() !== '' && this.password.trim() !== '';
  }

  isCredentialsValid(): boolean {
    return this.username === 'test01' && this.password === 'test01';
  }

  showAlert(message: string): void {
    alert(message);
  }

}
