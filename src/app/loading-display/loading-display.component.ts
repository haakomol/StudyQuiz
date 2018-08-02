import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-display',
  templateUrl: './loading-display.component.html',
  styleUrls: ['./loading-display.component.css']
})
export class LoadingDisplayComponent implements OnInit {
  hide: boolean;

  constructor() { }

  ngOnInit() {
    this.hide = true;
    setTimeout(() => (this.hide = false), 200);
  }

}
