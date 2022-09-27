import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hp-solution',
  templateUrl: './hp-solution.component.html',
  styleUrls: ['./hp-solution.component.css']
})
export class HpSolutionComponent implements OnInit {

  constructor() { 
    this.name = '';
    this.link = '';
  }

  @Input() name: string;
  @Input() link: string;

  ngOnInit(): void {
  }

}
