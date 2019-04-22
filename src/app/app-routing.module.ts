import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { StatusComponent } from './status/status.component';
import { TravelInfoComponent } from './travel-info/travel-info.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CommentsComponent } from './comments/comments.component';
import { UpdatesComponent } from './updates/updates.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
	{ path: 'dashboard', component: DashboardComponent, children: [
		{ path: '', pathMatch: 'full', redirectTo: 'documents', },
		{ path: 'documents', component: DocumentsComponent, },
		{ path: 'status', component: StatusComponent, },
		{ path: 'travel', component: TravelInfoComponent, },
		{ path: 'notifications', component: NotificationsComponent, },
		{ path: 'comments', component: CommentsComponent, },
		{ path: 'updates', component: UpdatesComponent, },
	] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
