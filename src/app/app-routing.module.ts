import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { StatusComponent } from './status/status.component';
import { TravelInfoComponent } from './travel-info/travel-info.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CommentsComponent } from './comments/comments.component';
import { UpdatesComponent } from './updates/updates.component';
import { WguInfoComponent } from './wgu-info/wgu-info.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ImcFaqComponent } from './imc-faq/imc-faq.component';
import { ImcRequestComponent } from './imc-request/imc-request.component';

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
		{ path: 'wgu-info', component: WguInfoComponent, },
		{ path: 'contact-details', component: ContactDetailsComponent, },
		{ path: 'faq', component: ImcFaqComponent, },
		{ path: 'request', component: ImcRequestComponent, },
	] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
