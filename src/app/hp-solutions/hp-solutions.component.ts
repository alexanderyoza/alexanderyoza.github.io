import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hp-solutions',
  templateUrl: './hp-solutions.component.html',
  styleUrls: ['./hp-solutions.component.css']
})
export class HpSolutionsComponent implements OnInit {
  names: string[];
  links: string[];
  constructor() { 
    this.names = new Array<string>('Implants', 'SureSmile®', 'Veneers', 'Cerec', 'Sleep Apnea');
    this.links = new Array<string>('#', '#', '#', '#', '#');
  }

  ngOnInit(): void {
  }

}
