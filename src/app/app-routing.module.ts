import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { ChildComponent } from './components/child/child.component';
import { authGuard } from './guards/auth.guard';
import { DepartmentComponent } from './components/department/department.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'parent', pathMatch: 'full' },
  { path: 'parent', component: ParentComponent, children: 
    [
      { path: 'child', component: ChildComponent }
    ]
  },
  { path: 'pipe', component: PipeDemoComponent, canActivate: [authGuard] },
  { path: 'department', component: DepartmentComponent },
  { path: 'department/:id', component: DepartmentDetailsComponent },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '**', redirectTo: 'parent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
