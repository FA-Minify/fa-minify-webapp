import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { FileDropModule } from 'ngx-file-drop';

import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload/upload.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ChooseComponent } from './components/choose/choose.component';
import { HeaderComponent } from './components/header/header.component';
import { FAIconComponent } from './components/fa-icon/fa-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ChooseComponent,
    HeaderComponent,
    FAIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VirtualScrollerModule,
    FileDropModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
