import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  showDesc = false;

  constructor() { 
    this.name = '';
    this.desc = '';
    this.showDesc = false;
  }

  toggleDesc = () => {
    if (this.showDesc){
      this.name = 'garter';
    } else {
      this.name = 'henry';
    }
    this.showDesc = !this.showDesc;
  }

  @Input() name: string;
  @Input() desc: string;

  ngOnInit(): void {
  }

}
