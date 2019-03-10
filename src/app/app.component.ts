import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'p1';
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  onHover():void{
    this.trigger.openMenu();
  }
  onOut():void{
    this.trigger.closeMenu();
  }
}
