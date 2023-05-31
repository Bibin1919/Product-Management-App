import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {
/* to hold all items data from api */
  allitems:any=[]
  searchKey:string=''
/* Dependency Injection using constructor */
constructor(private api:ApiService ){
 
}
ngOnInit(): void {
  /* api call to get all contacts */
  this.api.allitems()
  .subscribe((result:any)=>{
    /* result is all items array from api */
    console.log(result);
    this.allitems = result.products
     
  })
}

/* Delete Item */
deleteItem(itemId:any){
  this.api.deleteItem(itemId)
  .subscribe((data:any)=>{
window.location.reload()
console.log(data);

  })
}
}
