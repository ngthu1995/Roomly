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
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserlistComponent } from './components/userList/userList.component';
import { HereMapComponent } from './components/donation/here_map/here-map.component';


/* Bootstrap */
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DonationOptionsComponent } from './components/donation-options/donation-options.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StoriesComponent } from './components/stories/stories.component';
import { StoryComponent } from './components/stories/story/story.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DonationCreditCardComponent } from './components/donation-options/donation-credit-card/donation-credit-card.component';
import { AboutComponent } from './components/about/about.component';
import { PostsComponent } from './components/posts/posts.component';

// map Module
import { AgmCoreModule } from "@agm/core";
import { CamelizePipe, UcWordsPipe } from 'ngx-pipes';
import { MapService } from './services/map.service';
import { MapComponent } from '../app/components/donation/map/map.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './components/auth/auth.guard';
import { HTTP_INTERCEPTORS, HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './components/auth/token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// ang material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmAdminComponent } from './components/confirm-admin/confirm-admin.component'
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule, MatSelectModule } from '@angular/material'
import { BillService } from './services/bill.service';
import { ManageComponent } from './components/manage/manage.component';
import { SearchTextPipe } from '../search-text.pipe';
import { ToastrModule } from 'ngx-toastr';
import { ImageUploadComponent } from './components/image-upload/image-upload.component'
import { ImageUploadService } from './services/image-upload.service';

import { ImageCropperModule } from 'ngx-image-cropper';
import { ManageItemComponent } from './components/manage-item/manage-item.component';
import { ErrorComponent } from './components/error/error.component'
import { ErrorInterceptor } from './error-interceptor';
import { PostDetailComponent } from './components/donation/post-detail/post-detail.component';

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
    FooterComponent,
    DonationOptionsComponent,
    StoriesComponent,
    StoryComponent,
    DonationCreditCardComponent,
    MapComponent,
    ConfirmAdminComponent,
    ManageComponent,
    SearchTextPipe,
    ImageUploadComponent,
    ManageItemComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    UserlistComponent,
    HereMapComponent,
    PostDetailComponent,
    PostsComponent
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
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    ImageCropperModule,
  ],
  entryComponents: [ConfirmAdminComponent, ErrorComponent, DonationComponent, PostDetailComponent,
    DonationOptionsComponent],
  providers: [MapService, CamelizePipe, AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    HttpClient,
    BillService,
    ImageUploadService,
    UcWordsPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
