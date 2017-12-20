import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BotService} from './bot.service'
import {BotInterfaceComponent} from './bot-interface/bot-interface.component'
import {FormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ BotInterfaceComponent ], // <-- export here
  declarations: [BotInterfaceComponent],
  providers: [BotService]
})
export class BotModule { }
