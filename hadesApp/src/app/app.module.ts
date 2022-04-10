import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GodsComponent } from './gods/gods.component';
import { BoonsComponent } from './gods/boons/boons.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const appRoutes: Routes = [
  {path: '', component: AboutPageComponent},
  {path: 'gods', component: GodsComponent},
  {path: 'gods/:name', component: BoonsComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'signUp', component: SignUpComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GodsComponent,
    BoonsComponent,
    AboutPageComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
