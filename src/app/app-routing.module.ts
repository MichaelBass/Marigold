import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PortalComponent } from './portal/portal.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/portal', pathMatch: 'full' },
  { path: 'home/:id', component: HomepageComponent },
  { path: 'portal', component: PortalComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'events/:id', component: EventsComponent },
  { path: 'registration/:id', component: RegistrationComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
