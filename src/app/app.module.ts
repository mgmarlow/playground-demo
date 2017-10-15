import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DetailsFormComponent } from './user-profile/details-form/details-form.component';
import { InfoSummaryComponent } from './user-profile/info-summary/info-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    DetailsFormComponent,
    InfoSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
