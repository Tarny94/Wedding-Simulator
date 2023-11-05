import {Component, Inject, OnInit} from '@angular/core';
import {STATUS, INVITED, ZONE} from "../../Constants/const";
import {GuestService} from "../guest-service/guest.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-guest',
  templateUrl: './create-guest.component.html',
  styleUrls: ['./create-guest.component.scss']
})
export class CreateGuestComponent implements OnInit{
  familyName : string = '';
  adult : number = 0;
  children : number = 0;
  status : string = "";
  invited : string = "";
  zone : string = "";
  estimate : number = 0;
  invitedValues : string[] = [];
  statusValues : string [] = [];
  zoneValues : string[] = [];
  guest$ : any;



  constructor(public guestService: GuestService,
              @Inject(MAT_DIALOG_DATA) public data: MatDialogRef<string> ) {
  }

  ngOnInit(): void {
    this.invitedValues = INVITED;
    this.statusValues = STATUS;
    this.zoneValues = ZONE;

    this.checkIfIsEditMode()
  }

  checkIfIsEditMode() {

    if(this.data.id) {
      this.guestService.getGuestById(this.data.id).subscribe(result => {
        this.familyName = result.familyName;
        this.adult = result.adult;
        this.children = result.children;
        this.status = result.status;
        this.invited = result.invited;
        this.zone = result.zone;
        this.estimate = result.estimate;
      }, error => {
        console.log("Something went wrong")
      }, () => {
        console.log("Completed")
      })
    }
  }

  onSubmit() {
    const guest = {
      familyName : this.familyName,
      adult : this.adult,
      children : this.children,
      status : this.status,
      invited : this.invited,
      zone : this.zone,
      estimate : this.estimate,
    }

    if(this.data.id) {
      this.guestService.updateGuest(this.data.id, guest).subscribe(res => {
        console.log("Edit: ",res)
      },error => {}, () => {})
    } else {
      this.guestService.createGuest(guest).subscribe(res => {
        console.log("Create: ", res)
      }, error => {}, () => {})
    }
  }
}
