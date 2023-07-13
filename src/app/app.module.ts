import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserregComponent } from './userreg/userreg.component';
import { UserregService } from './userreg.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { UsersignupComponent } from './usersignup/usersignup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserregComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserregService],
  bootstrap: [AppComponent]
})
export class AppModule { }
