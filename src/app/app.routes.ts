import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [
    {path: '', redirectTo: 'principal', pathMatch: 'full'},
    {path: 'principal', component: PrincipalComponent},
    {path: 'service', component: ServicesComponent},
];
