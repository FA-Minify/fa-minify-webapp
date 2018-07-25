import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload/upload.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ChooseComponent } from './components/choose/choose.component';
import { HeaderComponent } from './components/header/header.component';
import { DroptargetComponent } from './components/droptarget/droptarget.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ChooseComponent,
    HeaderComponent,
    DroptargetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
