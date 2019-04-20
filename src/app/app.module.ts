import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload/upload.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ChooseComponent } from './components/choose/choose.component';
import { HeaderComponent } from './components/header/header.component';
import { FAIconComponent } from './components/fa-icon/fa-icon.component';
import { IconTypeListComponent } from './components/choose/icon-type-list/icon-type-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    IconTypeListComponent,
    ChooseComponent,
    HeaderComponent,
    FAIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
