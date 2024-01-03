import {Component, Inject, OnInit} from '@angular/core';
import {displayColumnSupplyList} from "../../../constants/const";
import {Store} from "@ngrx/store";
import {addSupplies, updateSupplies} from "../store/actions/supplies.actions";
import {Supply} from "../../../interface/wedding-interfaces";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SuppliesService} from "../supplies.service";

@Component({
  selector: 'app-wedding-create-edit-supplies',
  templateUrl: './wedding-create-edit-supplies.component.html',
  styleUrls: ['./wedding-create-edit-supplies.component.scss']
})
export class WeddingCreateEditSuppliesComponent implements OnInit{
  id: string = "";
  supply : string = "";
  price : number = 0;
  totalPrice : number = 0;
  payed : number = 0;
  confirmed : boolean = false;
  observation : string = "";

  protected readonly titleSuppliesArray = displayColumnSupplyList;

  constructor(
    private store : Store,
    private suppliesService : SuppliesService,
    @Inject(MAT_DIALOG_DATA) public data: MatDialogRef<string>
  ) {}

  ngOnInit(): void {
    console.log("ID: ", this.data.id)
    if (this.data.id) {
      this.suppliesService.getSupply(this.data.id).subscribe(item => {
          this.id = this.data.id;
          this.supply = item.supply;
          this.price = item.price;
          this.totalPrice = item.totalPrice;
          this.payed = item.payed;
          this.confirmed = item.confirmed;
          this.observation = item.observation;
        },
        (error) => {
          console.log("Error", error)
        },
        () => {
          console.log("%@#$: ",this.id,this.supply,
          this.price,
          this.totalPrice ,
          this.payed,
          this.confirmed ,
          this.observation )
        }
      )
    }
  }

  onSubmit() {
    const supplyData: Supply = {
      supply: this.supply,
      price : this.price,
      totalPrice : this.totalPrice,
      payed : this.payed,
      confirmed : this.confirmed,
      observation : this.observation
    }
    console.log("##", supplyData)

    if(this.data.id) {
      try {
        this.store.dispatch(updateSupplies({id: this.data.id,updatedSupply: supplyData}))
      } catch (error) {
        console.log("error: ", error)
      }
    } else {
      try {

        this.store.dispatch(addSupplies({supply : supplyData}));
      } catch {

      }
    }
  }
}
