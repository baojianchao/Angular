import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ExitComponent } from './exit/exit.component';
import { ManagementComponent } from './management/management.component';
import { LoginGuard } from './login.guard';
import { AuthService } from './auth.service';
import { UserManagementComponent } from './user-management/user-management.component';

const mgtChildrenRoutes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: ManagementComponent },
  { path: 'exit', component: ExitComponent }
];

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'management',
    component: ManagementComponent,
    children: mgtChildrenRoutes,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ExitComponent,
    ManagementComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
