import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterEvent, Router } from '@angular/router';

// inmport Components
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DonationComponent } from './components/donation/donation.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'donation', component: DonationComponent},
  {path: 'profile', component: ProfileComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
