import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { 
    this.name = '';
    this.description = '';
  }

  @Input() name:string;
  @Input() description:string;

  ngOnInit(): void {
  }

}
