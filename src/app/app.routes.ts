import { Routes } from '@angular/router';
import { SalaryComponent } from './components/salary/salary.component';

export const routes: Routes = [
  { path: 'salaries', component: SalaryComponent },
  { path: '', redirectTo: '/salaries', pathMatch: 'full' },
];
