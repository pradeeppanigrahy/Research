import { Component, OnInit } from '@angular/core';
import {Routes,RouterModule,Router,RouterLink} from '@angular/router'


@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 public voicetext="Command here!";
 public status:string="Initial";
 me;
 
 
  constructor() { 
    this.me=this;
  }

  ngOnInit() {}
    
    


  startCapturing() {
     //this.me=this;
    recognition.start(this.me);
    //alert(this.voicetext);
    this.voicetext=this.voicetext;
    
  }
  stopCapturing() {
    alert(this.voicetext);

    recognition.stop(this);
    
  }

}

var SpeechRecognition = (<any>window).SpeechRecognition || (<any>window).webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.continuous=true;



(function ()
{
  try {
    
  
      recognition.onstart = function(that) { 
        that.voicetext="Voice recognition activated. Try speaking into the microphone.";
        console.log("started");
      }
  
      recognition.onresult = function(event) {
        var noteContent;
          // event is a SpeechRecognitionEvent object.
          // It holds all the lines we have captured so far. 
          // We only need the current one.
          var current = event.resultIndex;
        
          // Get a transcript of what was said.
          var transcript = event.results[current][0].transcript;
        
          // Add the current transcript to the contents of our Note.
          noteContent += transcript;
          this.voicetext=noteContent;
          console.log(noteContent);
        }
      
      recognition.onspeechend = function() {
        recognition.stop();
        this.status="You were quiet for a while so voice recognition turned itself off.";
        console.log("Speech end.");
        
      }
      
      recognition.onerror = function(event) {
        if(event.error == 'no-speech') {
          this.status="No speech was detected. Try again.";
         console.log("speech error!");
        };
      }
    }
    catch(e) {
      console.error(e);
    }
  
}());
