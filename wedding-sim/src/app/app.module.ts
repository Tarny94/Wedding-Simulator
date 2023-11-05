import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeddingInvitationListComponent } from './Pages/wedding-list/wedding-invitation-list/wedding-invitation-list.component';
import { TablePaginationFilteringSortingComponent } from './Pages/Utils/Table/table-with-pagination-filtering-sorting/table-pagination-filtering-sorting.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HeaderWeddingComponent } from './Pages/Header/header-wedding/header-wedding.component';
import {MatIconModule} from "@angular/material/icon";
import { CreateGuestComponent } from './Pages/create-guest/create-guest.component';
import { EditGuestComponent } from './Pages/edit-guest/edit-guest.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    WeddingInvitationListComponent,
    HeaderWeddingComponent,
    CreateGuestComponent,
    EditGuestComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TablePaginationFilteringSortingComponent,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
