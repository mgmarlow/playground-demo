import { UserService } from './user-profile/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DetailsFormComponent } from './user-profile/details-form/details-form.component';
import { InfoSummaryComponent } from './user-profile/info-summary/info-summary.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    UserProfileComponent,
    DetailsFormComponent,
    InfoSummaryComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
