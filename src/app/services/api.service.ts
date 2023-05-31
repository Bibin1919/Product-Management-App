import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

/* All-items -to get all items data from api */
allitems(){
  /* http request to get all items from api */
  return this.http.get('https://fakestoreapi.com/products')

}


/* Api to get a particual item */
viewItem(itemId:any){
  return this.http.get('https://dummyjson.com/products/'+itemId)
}

/* Api call to add new item to url */
addItem(Item:any){
  return this.http.post('https://dummyjson.com/products/',Item)
}

/* Api call to delete Item */
deleteItem(itemId:any){
  return this.http.delete('https://dummyjson.com/products/'+itemId)
}
}
