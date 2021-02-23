import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountPageComponent } from './count-page/count-page.component';
import { ErrorMessagePageComponent } from './error-message-page/error-message-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'login-page', pathMatch: 'full'},
  {path: 'error-message-page', component: ErrorMessagePageComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: 'search-page', component: SearchPageComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'count-page', component: CountPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
