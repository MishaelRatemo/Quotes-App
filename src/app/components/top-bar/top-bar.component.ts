import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  logo: string = 'assets/logo.png'
  time = new Date();
  intervalId:any;

  constructor() { }

  
  ngOnInit() {
      this.intervalId = setInterval(() => {
        this.time = new Date();
      },1000)

  }

}
