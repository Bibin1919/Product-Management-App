import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { myItem } from 'src/models/myItem';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  Item: myItem = {}

  constructor(private api: ApiService, private addItemRouter: Router) {

  }
  ngOnInit(): void {

  }
  
  addItem(Item: any) {
    this.api.addItem(Item)
      .subscribe((data: any) => {
        alert('Success')
        this.addItemRouter.navigateByUrl('all-items')
      })
  }

  
}
