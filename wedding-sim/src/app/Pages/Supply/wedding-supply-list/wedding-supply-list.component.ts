import {Component, OnInit} from '@angular/core';
import {displayColumnSupplyList, displayedColumnsArraySupply} from "../../../Constants/const";
import {Supply} from "../../../Interface/wedding-interfaces";

@Component({
  selector: 'app-wedding-supply-list',
  templateUrl: './wedding-supply-list.component.html',
  styleUrls: ['./wedding-supply-list.component.scss']
})
export class WeddingSupplyListComponent implements OnInit{

  protected readonly displayedColumnsArraySupply = displayedColumnsArraySupply;
  protected readonly displayedColumnsSupplyList = displayColumnSupplyList;
  dataSourceSupply : Supply[] = [];

  ngOnInit(): void {
    this.dataSourceSupply = [
      {
        supply : "Music",
        price: 33,
        totalPrice:444,
        payed: 0,
        confirmed: false,
        observation: ""
      },
      {
        supply : "Place",
        price: 22,
        totalPrice:55,
        payed: 5,
        confirmed: true,
        observation: "without music"
      }
    ]
  }
}
