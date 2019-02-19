import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DonationComponent } from './components/donation/donation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BannerComponent } from './components/landing/banner/banner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';

/* Bootstrap */
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DonationOptionsComponent } from './components/donation-options/donation-options.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StoriesComponent } from './components/stories/stories.component';
import { StoryComponent } from './components/stories/story/story.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DonationCreditCardComponent } from './components/donation-options/donation-credit-card/donation-credit-card.component';
import { DonationStuffComponent } from './components/donation-options/donation-stuff/donation-stuff.component';

// map Module
import { AgmCoreModule } from "@agm/core";
import { CamelizePipe } from 'ngx-pipes';
import { MapService } from './services/map.service';
import { MapComponent } from './components/donation-options/donation-stuff/map/map.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './components/auth/auth.guard';
import { HTTP_INTERCEPTORS, HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './components/auth/token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// ang material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    DonationComponent,
    ProfileComponent,
    BannerComponent,
    CarouselComponent,
    FooterComponent,
    DonationOptionsComponent,
    StoriesComponent,
    StoryComponent,
    DonationCreditCardComponent,
    DonationStuffComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBAp-IE7yjSGvycutmK1Y8zLZ_Htq1TtgU"
    }),
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [DonationOptionsComponent],
  providers: [MapService, CamelizePipe, AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
