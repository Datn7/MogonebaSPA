import { Routes } from '@angular/router';
import { TestComponent } from './test-component/test-component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { MemoriesComponent } from './memories/memories.component';

export const routes: Routes = [  
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'landing', component: LandingPageComponent },
   { path: 'login', component: LoginComponent },
   {path:'memories', component: MemoriesComponent}
];
