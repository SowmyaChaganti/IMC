import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatListModule, MatCardModule, MatExpansionModule, MatButtonModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFileUploadModule } from 'angular-material-fileupload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImcHeaderComponent } from './imc-header/imc-header.component';
import { ImcNavComponent } from './imc-nav/imc-nav.component';
import { DocumentsComponent } from './documents/documents.component';
import { StatusComponent } from './status/status.component';
import { TravelInfoComponent } from './travel-info/travel-info.component';
import { ImcInfoComponent } from './imc-info/imc-info.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CommentsComponent } from './comments/comments.component';
import { UpdatesComponent } from './updates/updates.component';
import { WguInfoComponent } from './wgu-info/wgu-info.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ImcFaqComponent } from './imc-faq/imc-faq.component';
import { ImcRequestComponent } from './imc-request/imc-request.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		ImcHeaderComponent,
		ImcNavComponent,
		DocumentsComponent,
		StatusComponent,
		TravelInfoComponent,
		ImcInfoComponent,
		NotificationsComponent,
		CommentsComponent,
		UpdatesComponent,
		WguInfoComponent,
		ContactDetailsComponent,
		ImcFaqComponent,
		ImcRequestComponent,
		FileUploadComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		MatCardModule,
		MatExpansionModule,
		MatFileUploadModule,
		MatButtonModule,
		MatListModule,
		MatToolbarModule,
		AppRoutingModule,
		MatTableModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
