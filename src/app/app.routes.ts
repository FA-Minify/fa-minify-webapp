import { Routes } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { ChooseComponent } from './components/choose/choose.component';

export const ROUTES: Routes = [
  { path: 'choose', component: ChooseComponent },
  { path: '', component: UploadComponent },
  { path: '**', redirectTo: '/' }
]