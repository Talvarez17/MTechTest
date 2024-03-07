import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'table', component: TableComponent },
      { path: 'create', component: CreateComponent },
      { path: '**', redirectTo:'table' }

    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
