import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeddingInvitationListComponent } from './Pages/wedding-list/wedding-invitation-list/wedding-invitation-list.component';
import { TablePaginationFilteringSortingComponent } from './Pages/Utils/Table/table-with-pagination-filtering-sorting/table-pagination-filtering-sorting.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HeaderWeddingComponent } from './Pages/Header/header-wedding/header-wedding.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    WeddingInvitationListComponent,
    HeaderWeddingComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TablePaginationFilteringSortingComponent,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
