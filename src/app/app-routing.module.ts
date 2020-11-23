import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecretSantaComponent } from './modules/secret-santa/components/secret-santa/secret-santa.component';

const routes: Routes = [
  {
    path: 'secret-santa',
    component: SecretSantaComponent,
    loadChildren: () => import('./modules/secret-santa/secret-santa.module').then(m => m.SecretSantaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
