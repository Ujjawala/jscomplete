import { Component, OnInit, ViewChild, ElementRef, ɵgetComponentViewDefinitionFactory } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() {}

  // timeLeft = 60;
  interval;
  timeStart;

  ngOnInit() {
    this.timeStart = 0;
  }
  startTimer(video) {
    video.play();
    this.interval = setInterval(() => {
      if ( this.timeStart === 20) {
        this.pauseOrPlay(video);
        clearInterval(this.interval);
        this.timeStart++;
      } else {
        this.timeStart++;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  videopause(event) {
    // if (event.selected === true) {
    //   event.selected = false;
    // }
    console.log('pause', event);
  }
  videoplay(e) {
    console.log('play', e);
  }
  pauseOrPlay(video) {
    // console.log('hello');
    video.pause();
 }
}
