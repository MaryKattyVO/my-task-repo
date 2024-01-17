import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { authReducer } from './store/auth.reducer';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({ auth: authReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
