import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class QuestioExeEngineService {
  private url = './assets/question.json';

  constructor(private _http: HttpClient) { }

  public  findques(): any {
    let trackinfo = this._http.get(this.url);
    return trackinfo;
     }
}
