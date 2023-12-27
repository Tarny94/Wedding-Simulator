import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeddingInvitationListComponent } from './Pages/Guests/wedding-invitation-list/wedding-invitation-list.component';
import { TablePaginationFilteringSortingComponent } from './Pages/Guests/table-with-pagination-filtering-sorting/table-pagination-filtering-sorting.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HeaderWeddingComponent } from './Pages/Header/header-wedding/header-wedding.component';
import {MatIconModule} from "@angular/material/icon";
import { CreateGuestComponent } from './Pages/Guests/create-guest/create-guest.component';
import { EditGuestComponent } from './Pages/Guests/edit-guest/edit-guest.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import { WeddingSupplyListComponent } from './pages/supply/wedding-supply-list/wedding-supply-list.component';
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    WeddingInvitationListComponent,
    HeaderWeddingComponent,
    CreateGuestComponent,
    EditGuestComponent,
    WeddingSupplyListComponent,
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
    FormsModule,
    MatSortModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
