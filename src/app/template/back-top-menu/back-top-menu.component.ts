import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-back-top-menu',
  templateUrl: './back-top-menu.component.html',
  styleUrls: ['./back-top-menu.component.scss']
})
export class BackTopMenuComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

  goBack(){
    window.history.back();
  }
}

