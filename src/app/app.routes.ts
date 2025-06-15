import { Routes } from '@angular/router';
import { TestComponent } from './test-component/test-component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [  
   { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent }
];
