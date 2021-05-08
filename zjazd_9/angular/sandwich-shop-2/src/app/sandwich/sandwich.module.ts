import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SandwichFormComponent } from './sandwich-form/sandwich-form.component';
import { SandwichListComponent } from './sandwich-list/sandwich-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SandwichDetailsComponent } from '../sandwich/sandwich-details/sandwich-details.component';
import { SandwichItemComponent } from './sandwich-item/sandwich-item.component';
import { SpecialGuard } from './special.guard';
import { SandwichResolver } from './sandwiches-resolver';

const routes: Routes = [
  {
    path: 'sandwiches',
    resolve: {
      sandwiches: SandwichResolver
    },
    component: SandwichListComponent
  },
  {
    path: 'sandwiches/form',
    component: SandwichFormComponent
  },
  {
    path: 'sandwiches/:id',
    canActivate: [SpecialGuard],
    component: SandwichDetailsComponent
  }
];

@NgModule({
  declarations: [
    SandwichFormComponent,
    SandwichListComponent,
    SandwichDetailsComponent,
    SandwichItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SandwichFormComponent,
    SandwichListComponent
  ]
})
export class SandwichModule { }
