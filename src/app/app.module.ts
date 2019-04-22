import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImcHeaderComponent } from './imc-header/imc-header.component';
import { ImcNavComponent } from './imc-nav/imc-nav.component';
import { GeneralComponent } from './general/general.component';
import { DocumentsComponent } from './documents/documents.component';
import { StatusComponent } from './status/status.component';
import { TravelInfoComponent } from './travel-info/travel-info.component';
import { ImcInfoComponent } from './imc-info/imc-info.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CommentsComponent } from './comments/comments.component';
import { UpdatesComponent } from './updates/updates.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ImcHeaderComponent,
    ImcNavComponent,
    GeneralComponent,
    DocumentsComponent,
    StatusComponent,
    TravelInfoComponent,
    ImcInfoComponent,
    NotificationsComponent,
    CommentsComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
