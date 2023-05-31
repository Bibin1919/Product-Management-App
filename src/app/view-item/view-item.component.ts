import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  itemId:string=''
    item:any=[]
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){

  }
  /* to get path parameter from url */
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data.id);
      this.itemId=data.id
    })
    /* to get details of particular item */
    this.api.viewItem(this.itemId)
    .subscribe((result:any)=>{
      console.log(result);
      this.item=result
    })
  }

}
