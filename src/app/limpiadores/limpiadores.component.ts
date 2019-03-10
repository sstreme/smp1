import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-limpiadores',
  templateUrl: './limpiadores.component.html',
  styleUrls: ['./limpiadores.component.css']
})
export class LimpiadoresComponent implements OnInit {
  title = 'Productos Vivier Skin';

  limpiadores : string [] = [
    'Foaming Cleanser',
    'Deep Cleaning Astringent',
    'HEXAM',
    'Vitamin C Scrub',
    'Refreshing Toner'
  ];
  constructor() { }


  ngOnInit() {
  }

}
