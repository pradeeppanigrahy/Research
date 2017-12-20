import { Component, OnInit } from '@angular/core';
import {BotService,Message} from '../bot.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';


@Component({
  selector: 'app-bot-interface',
  templateUrl: './bot-interface.component.html',
  styleUrls: ['./bot-interface.component.css']
})
export class BotInterfaceComponent implements OnInit {

  messages: Observable<Message[]>;
  userQuery: string;
  constructor(public bot: BotService) { }
  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.bot.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
  }
  sendMessage() {
    this.bot.converse(this.userQuery);
    this.userQuery = '';
  }

}
