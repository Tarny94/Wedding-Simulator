import {Component, OnInit} from '@angular/core';
import {displayedColumnsArray} from "../../../Constants/const";


@Component({
  selector: 'app-wedding-invitation-list',
  templateUrl: './wedding-invitation-list.component.html',
  styleUrls: ['./wedding-invitation-list.component.scss']
})
export class WeddingInvitationListComponent implements OnInit{
  displayedColumns : any
  users = [
    {
    position: 1,
    name : "Fam. Relusssssssssssss sasdasds",
    status : "Sure",
    adult : 2,
    children : 1,
    zone : "Local",
    estimate : "2000"
    },
    {
      position: 2,
      name : "Fam. Gla",
      status : "Not Sure",
      adult : 3,
      children : 0,
      zone : "Distance",
      estimate : "5000"
    },
    {
      position: 1,
      name : "Fam. Relusssssssssssss sasdasds",
      status : "Sure",
      adult : 2,
      children : 1,
      zone : "Local",
      estimate : "2000"
    },
    {
      position: 2,
      name : "Fam. Gla",
      status : "Not Sure",
      adult : 3,
      children : 0,
      zone : "Distance",
      estimate : "5000"
    },
    {
      position: 1,
      name : "Fam. Relusssssssssssss sasdasds",
      status : "Sure",
      adult : 2,
      children : 1,
      zone : "Local",
      estimate : "2000"
    },
    {
      position: 2,
      name : "Fam. Gla",
      status : "Not Sure",
      adult : 3,
      children : 0,
      zone : "Distance",
      estimate : "5000"
    }
  ]

  ngOnInit(): void {
    this.displayedColumns = displayedColumnsArray
  }



}
