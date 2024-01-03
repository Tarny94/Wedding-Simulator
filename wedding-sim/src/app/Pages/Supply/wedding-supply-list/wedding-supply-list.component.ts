import {Component, OnInit} from '@angular/core';
import {displayColumnSupplyList, displayedColumnsArraySupply} from "../../../constants/const";
import {Supply} from "../../../interface/wedding-interfaces";
import {MatDialog} from "@angular/material/dialog";
import {
  WeddingCreateEditSuppliesComponent
} from "../wedding-create-edit-supplies/wedding-create-edit-supplies.component";
import {Store} from "@ngrx/store";
import {selectAllSupplies} from "../store/selectors/supplies.selectors";
import {loadSupplies, removeSupplies} from "../store/actions/supplies.actions";
import {SuppliesService} from "../supplies.service";
import {AppState} from "../store/models/supplies.state";


@Component({
  selector: 'app-wedding-supply-list',
  templateUrl: './wedding-supply-list.component.html',
  styleUrls: ['./wedding-supply-list.component.scss']
})
export class WeddingSupplyListComponent implements OnInit{

  protected readonly displayedColumnsArraySupply = displayedColumnsArraySupply;
  protected readonly displayedColumnsSupplyList = displayColumnSupplyList;

  dataSourceSupply = this.suppliesService.getSupplies()
  supplies$ = this.store.select(selectAllSupplies);

  constructor(public dialog: MatDialog, private store : Store<AppState>, private suppliesService: SuppliesService) {
  }

  ngOnInit(): void {
     this.store.dispatch(loadSupplies());
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(WeddingCreateEditSuppliesComponent, {
      data : {id : null}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateDialog(id : String) {
    const dialogRef = this.dialog.open(WeddingCreateEditSuppliesComponent, {
      data : {id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteSupply(id : string) {
    this.store.dispatch(removeSupplies({id}));
  }

  protected readonly removeSupplies = removeSupplies;
}
