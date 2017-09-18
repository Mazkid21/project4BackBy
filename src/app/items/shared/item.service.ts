import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Item } from './item';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ItemService {

  private basePath = '/items';

  items: FirebaseListObservable<Item[]> = null; //  list of objects
  userId: string;
  item: FirebaseObjectObservable<Item> = null; //   single object

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }


  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getItemsList(query = {}): FirebaseListObservable<Item[]> {
    if (!this.userId) return;
    this.items = this.db.list(`items/`); // Delete for trips accesable for all users ${this.userId}
  
    return this.items
  }

  // Return a single observable item
  getItem(key: string): FirebaseObjectObservable<Item> {
    const itemPath = `${this.basePath}/${key}`;
    this.item = this.db.object(itemPath)
    return this.item
  }

  // Create a bramd new item
  createItem(item: Item): void {
    item.userId = this.userId  // Delete for trips accesable for all users
    this.items.push(item)
      .catch(error => this.handleError(error))
  }

  // Update an exisiting item
  updateItem(key: string, value: any): void {
    this.items.update(key, value)
      .catch(error => this.handleError(error))
  }

  // Deletes a single item
  deleteItem(key: string): void {
    this.items.remove(key)
      .catch(error => this.handleError(error))
  }

  // Deletes the entire list of items
  deleteAll(): void {
    this.items.remove()
      .catch(error => this.handleError(error))
  }


  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
  }


}