import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RedcapService } from './redcap.service';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './/app-routing.module';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PortalComponent } from './portal/portal.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PortalComponent,
    LoginComponent,
    EventsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AccordionModule.forRoot()
  ],
  providers: [RedcapService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
