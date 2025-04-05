import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importado corretamente
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    importProvidersFrom(CommonModule), // ✅ Adicionado corretamente
    provideRouter(routes),
  ],
};
