import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  imgUrl= "../assets/BridgeLabz-2.jpg";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz....";
  }
}


