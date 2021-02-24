import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorMessagePageComponent } from './error-message-page/error-message-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CountPageComponent } from './count-page/count-page.component';
import { FormPanelComponent } from './form-panel/form-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ErrorMessagePageComponent,
    MainPageComponent,
    SearchPageComponent,
    CountPageComponent,
    FormPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
