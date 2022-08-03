import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtranjeroComponent } from './components/extranjero/extranjero.component';

const routes: Routes = [
  {
    path: 'extranjero/:id',
    component: ExtranjeroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
