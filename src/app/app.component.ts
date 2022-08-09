import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "MY PROJECT";
  firstname:string="Atif";
  Role:string="GET"
  Today:Date=new Date();
}
