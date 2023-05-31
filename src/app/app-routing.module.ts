import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewItemComponent } from './view-item/view-item.component';

const routes: Routes = [
  {
    path: '', component : HomepageComponent
  },
  {
    path: 'all-items' , component: AllItemsComponent
  },
  {
    path: 'add-item' , component: AddItemComponent
  },
  {
    path: 'edit-item/:id' , component: EditItemComponent
  },
  /* Viewitemcomponent */
  {
    path: 'view-item/:id' , component: ViewItemComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
