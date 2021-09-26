import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { TableComponent } from './table/table.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'addEmployee', component: AddComponent
  },
  {
    path:'viewEmployee', component: TableComponent
  },
  {
    path:'updateEmployee', component: UpdateComponent
  },
  {
    path:'delete', component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
