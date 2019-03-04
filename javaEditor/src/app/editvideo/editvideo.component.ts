import { Component, OnInit } from '@angular/core';
import { DiffEditorModel } from 'ngx-monaco-editor';
import { NgxEditorModel } from 'ngx-monaco-editor';
import { autocomplete } from './autocomplete';
import { QuestioExeEngineService } from '../questio-exe-engine.service';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-editvideo',
  styles: ['ngx-monaco-editor { height: 70vh; width:100%; display:block; }'],
  styleUrls: [],
  templateUrl: './editvideo.component.html',
})
export class EditvideoComponent implements OnInit {
   totaltest: String;
   passed: String;
  // wesocket
  public styleb: object = {};
  title = 'grokonez';
  val = 'true';
  myVar: boolean;
  description = 'Angular-WebSocket Demo';
  greetings: string[] = [];
  disabled = true;
  // name: string;
  code = `public class Employee {
    public  String addEmployeeEmailId(String emailId){

        return null;
    }
}
`;
  private stompClient = null;
  editorLoadStatus;
  videopath = '/assets/video1.mp4';
  i = 0;
  mvnDependencyDownload = 0;
  // socket ends here
  auto = new autocomplete;
  questitle: string;
  quesstatement: string;
  questioninputs: string;
  questionout: string;
  selectedLang = 'java';
  editorOptions = { theme: 'vs-light', language: 'java' };
  options = {
    theme: 'vs-dark'
  };

  jsonCode = [
    '{',
    '    "p1": "v3",',
    '    "p2": false',
    '}'
  ].join('\n');

  model: NgxEditorModel = {
    value: this.jsonCode,
    language: 'json',
    uri: 'foo.json',

  };


  originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'text/plain'
  };

  public colorg: object = { };
  timeStart: number;
  interval;
  selectChangeHandler(event: any) {
    this.selectedLang = event.target.value;
    this.editorOptions = { theme: 'vs-dark', language: this.selectedLang };
    if (this.selectedLang == "java")
      monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getJavaCompletionProvider(monaco));
    else
      if (this.selectedLang == "python")
        monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getPythonCompletionProvider(monaco));
      else
        if (this.selectedLang == "cpp")
          monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getCppCompletionProvider(monaco));
        else
          monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getCCompletionProvider(monaco));


  }

  onInit(editor) {
    let line = editor.getPosition();
    const monaco = window['monaco'];
    monaco.languages.registerCompletionItemProvider(this.selectedLang, this.auto.getJavaCompletionProvider(monaco));
    console.log(line);
  }
  constructor(public quesservice: QuestioExeEngineService) {  }

  ngOnInit() {
    console.log(this.code) ;
    this.connect();
  this.quesservice.findques().subscribe(
      data => {
        this.questitle = data['title'];
        this.quesstatement = data['statement'];
        this.questioninputs = data['inputs'];
        this.questionout = data['Output'];
        console.log(data);
      });
  }
  // socket code
  setConnected(connected: boolean) {
    this.disabled = !connected;
    if (connected) {
      this.greetings = [];
    }
  }
  connect() {
    const socket = new SockJS('http://localhost:8080/gkz-stomp-endpoint');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);
      this.connectedSocket = true;
      _this.stompClient.subscribe('/topic/hi', function (hello) {
        if ( _this.mvnDependencyDownload !== 0) {
          _this.showGreeting(JSON.parse(hello.body).greeting);
        } else {
          _this.mvnDependencyDownload++;
        }
      });
    });
  }
  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
    this.setConnected(false);
    console.log('Disconnected!');
  }
  submit() {
    console.log('submit button');
    console.log(this.code);
    this.greetings = [];
    this.stompClient.send(
      '/gkz/hello',
      {},
      JSON.stringify({ 'name': this.code })
    );
  }

  showGreeting(message) {
    this.greetings.push(message);
    this.greetings = this.greetings[0].split('#*@');
     this.totaltest = this.greetings[0];
     this.passed = this.greetings[1];
     console.log(this.totaltest);
     console.log(this.passed);
     this.greetings  = this.greetings[2].split('\n');
    this.colorg = {
      color: `red`
    };

    if (this.greetings[0] === 'Tests passed') {
      this.colorg = { color: 'green'};
    }
  }

  startTimer(video) {
    video.play();
    this.timeStart = 0;
    this.interval = setInterval(() => {
      if ( this.timeStart === 20) {
        video.pause();
        clearInterval(this.interval);
        this.editorLoadStatus = 'editorDisplayed';
        this.timeStart++;
      } else {
        this.timeStart++;
      }
    }, 1000);
    if (this.mvnDependencyDownload === 0) {
      this.submit();
    }
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  pauseOrPlay(video) {
    video.pause();
 }
 removeEditor() {
   this.editorLoadStatus = 'editorRemoved';
   if (this.i === 0) {
    this.videopath = '/assets/video1.mp4';
    this.i++;
   } else if (this.i === 1) {
    this.videopath = '/assets/video2.mp4';
    this.i++;
    this.code = `public class Employee {
      public  String addEmployeeEmailId(String emailId){
          return "after first part of video";
      }
    }
    `;
   } else if (this.i === 2) {
    this.videopath = '/assets/video3.mp4';
    this.i++;
    this.code = `public class Employee {
      public  String addEmployeeEmailId(String emailId){
          return "after second part of video";
      }
    }
    `;
   }

 }
}
