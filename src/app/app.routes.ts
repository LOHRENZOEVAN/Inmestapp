import { Routes } from '@angular/router';
import { DashboardComponent } from './main-features/dashboard/dashboard.component';
import { UsersComponent } from './main-features/users/users.component';
import { UserDetailComponent } from './main-features/user-detail/user-detail.component';
import { MyRequestsComponent } from './main-features/my-requests/my-requests.component';
import { MyClassesComponent } from './main-features/my-classes/my-classes.component';
import { LeavesComponent } from './main-features/leaves/leaves.component';
import { LeaveDetailComponent } from './main-features/leave-detail/leave-detail.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: 'my-requests', component: MyRequestsComponent},
    {path: 'my-classes', component: MyClassesComponent},
    {path: 'leaves', component: LeavesComponent},
    {path: 'leaves/:id/:name', component: LeaveDetailComponent},
    {path: 'user-detail', component: UserDetailComponent}
];
