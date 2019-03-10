import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foaming',
  templateUrl: './foaming.component.html',
  styleUrls: ['./foaming.component.css']
})
export class FoamingComponent implements OnInit {

  title : string = 'Foaming Cleanser';
  desc : string = 'GEL LIMPIADOR RETIRA IMPUREZAS, GRASA Y MAQUILLAJE EXCESIVOS, DEJANDO LA PIEL LIMPIA, LISA Y SUAVE';

  constructor() { }

  ngOnInit() {
  }

}
