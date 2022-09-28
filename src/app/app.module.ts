import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MessagingServiceService } from './service/messaging-service.service';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [MessagingServiceService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
