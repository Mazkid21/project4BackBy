import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item: Item;

  constructor(private itemSvc: ItemService, public auth: AuthService) { }

  ngOnInit() {
  }

  updateTimeStamp() {
    const date = new Date().getTime()
    this.itemSvc.updateItem(this.item.$key, { timeStamp: date })
  }

  updateActive(value: boolean) {
    this.itemSvc.updateItem(this.item.$key, { active: value })
  }

  deleteItem() {
    this.itemSvc.deleteItem(this.item.$key)
  }

}
