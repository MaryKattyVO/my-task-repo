import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize with empty username and password', () => {
    expect(component.username).toEqual('');
    expect(component.password).toEqual('');
  });
  it('should return true for valid input', () => {
    component.username = 'test';
    component.password = 'password';
    expect(component.isValidInput()).toBeTruthy();
  });
  it('should return false for invalid input', () => {
    component.username = '';
    component.password = 'password';
    expect(component.isValidInput()).toBeFalsy();
  });
  it('should show alert on empty input', () => {
    spyOn(window, 'alert').and.stub();
    component.login();
    expect(window.alert).toHaveBeenCalledWith('Por favor, ingrese el nombre de usuario y la contraseña.');
  });
});
