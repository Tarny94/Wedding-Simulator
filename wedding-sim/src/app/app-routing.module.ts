import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeddingSupplyListComponent} from "./pages/supply/wedding-supply-list/wedding-supply-list.component";
import {WeddingInvitationListComponent} from "./pages/guests/wedding-invitation-list/wedding-invitation-list.component";

const routes: Routes = [
  { path: 'supplies', component: WeddingSupplyListComponent },
  { path: 'guests', component: WeddingInvitationListComponent},
  { path: '', redirectTo: '/guests', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
