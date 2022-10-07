import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  showDesc = true;
  displayLearn = {'display' : 'block'};
  displayInfo =  {'display' : 'none'};

  constructor() { 
    this.name = '';
    this.desc = '';
    this.showDesc = true;
  }

  toggleDesc = () => {
    if (this.showDesc){
      this.displayLearn = {'display' : 'none'};
      this.displayInfo = {'display' : 'block'};
    } else {
      this.displayLearn = {'display' : 'block'};
      this.displayInfo = {'display' : 'none'};
    }
    console.log(this.displayLearn);
    this.showDesc = !this.showDesc;
  }

  getLearn = () => {
    return this.displayLearn;
  }

  getInfo = () => {
    return this.displayInfo;
  }

  @Input() name: string;
  @Input() desc: string;

  ngOnInit(): void {
  }

}
