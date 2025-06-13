import { Routes } from '@angular/router';
import { TestComponent } from './test-component/test-component';

export const routes: Routes = [  
    { path: '', redirectTo: 'test', pathMatch: 'full' }, // Add this line!
  { path: 'test', component: TestComponent }
];
