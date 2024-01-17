import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setLoggedInUser } from '../store/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor(private store: Store) {}

  login(username: string, password: string): boolean {
    this.isAuthenticated = username === 'test01' && password === 'test01';
    if (this.isAuthenticated) {
      this.store.dispatch(setLoggedInUser(username));
    }
    return this.isAuthenticated;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}
