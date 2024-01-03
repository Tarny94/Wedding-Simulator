import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateGuestComponent} from "../../guests/create-guest/create-guest.component";

@Component({
  selector: 'app-header-wedding',
  templateUrl: './header-wedding.component.html',
  styleUrls: ['./header-wedding.component.scss']
})
export class HeaderWeddingComponent {

  constructor(public dialog: MatDialog) {

  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateGuestComponent, {
      data : {id : null}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
