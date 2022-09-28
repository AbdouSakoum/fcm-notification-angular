import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireMessaging } from '@angular/fire/compat/messaging'

@Injectable()
export class MessagingServiceService {
  currentMessage = new BehaviorSubject<any>(null);

  constructor(
    private angularFireMessaging: AngularFireMessaging
  ) { 

  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (err)=> {
        console.log("issue to get permission", err)
      }
    )
  }

  recieveMessaging() {
    this.angularFireMessaging.messages.subscribe(
      (payload)=> {
        console.log("new msg recieved", payload);
        alert("new msg: " + payload);
        this.currentMessage.next(payload);
      }
    )
  }
}
