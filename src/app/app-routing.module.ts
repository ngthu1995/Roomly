import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterEvent, Router } from '@angular/router';

// inmport Components
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DonationComponent } from './components/donation/donation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StoriesComponent } from './components/stories/stories.component';
import { StoryComponent } from './components/stories/story/story.component';
import { ManageComponent } from './components/manage/manage.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserlistComponent } from './components/userList/userList.component';
import { DonationOptionsComponent } from './components/donation-options/donation-options.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/donation/post-detail/post-detail.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'post-form', component: DonationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'story', component: StoryComponent },
  {
    path: 'manage', component: ManageComponent,
  },
  { path: 'manage/:postId', component: PostDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'users', component: UserlistComponent },
  { path: 'donate', component: DonationOptionsComponent },
  { path: 'posts', component: PostsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
