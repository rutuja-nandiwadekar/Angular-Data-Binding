import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  imgUrl = "../assets/BridgeLabz-2.jpg";
  url = "https://bridgelabz.com/";
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz....";
  }

  onClick($event: any) {
    console.log("Save button is clicked", $event);
    window.open(this.url, "_blank");
  }

  onInput($event: any) {
    console.log("Change event occurred..", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\S]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect";
  }
}


