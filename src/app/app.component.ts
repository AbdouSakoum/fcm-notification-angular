import { Component, OnInit } from '@angular/core';
import { MessagingServiceService } from './service/messaging-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fcm-angular';
  message: any ;

  constructor(
    private messagingService: MessagingServiceService
  ){}
  ngOnInit(): void {
    this.messagingService.requestPermission();
    this.messagingService.recieveMessaging();
    this.message = this.messagingService.currentMessage;
  }

}
