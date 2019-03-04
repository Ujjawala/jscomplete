import { Component } from '@angular/core';
import { DiffEditorModel } from 'ngx-monaco-editor';
import { NgxEditorModel } from 'ngx-monaco-editor';
@Component({

  selector: 'app-root',
  styles: [],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  // editorLoadStatus;
 editorOptions = {theme: 'vs-dark', language: 'java'};
  code: string= `class a{
    public static void main(){
         Integer a;
    }
  }`;
  options = { theme: 'vs-dark' };

  jsonCode = [
    '{',
    '    "p1": "v3",',
    '    "p2": false',
    '}'
  ].join('\n');

  model: NgxEditorModel = {
    value: this.jsonCode,
    language: 'json',
    uri: 'foo.json'
  };

  originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'text/plain'
  };
  onInit(editor) {
    let line = editor.getPosition();
    console.log(line);
    // this.editorLoadStatus = 'editorRemoved';
  }
  // loadEditor() {
  //   this.editorLoadStatus = 'editorDisplayed';
  // }

  // removeEditor() {
  //   this.editorLoadStatus = 'editorRemoved';
  // }
}



