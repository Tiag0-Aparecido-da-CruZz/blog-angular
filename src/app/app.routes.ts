import { Routes } from '@angular/router';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

export const routes: Routes = [
  { path: '', component: PostDetailComponent },
  { path: 'post/:id', component: PostDetailComponent }
];
