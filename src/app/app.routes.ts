import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'home',
    component: Layout,
    // canActivate: [authGuard],
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
