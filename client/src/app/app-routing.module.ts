import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructionsComponent } from './instructions/instructions.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';

const routes: Routes = [
  { path: 'addUser', component: UsercomponentComponent },
  { path: 'Instructions', component: InstructionsComponent },
  { path: '', component: UsercomponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
