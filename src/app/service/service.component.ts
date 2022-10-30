import { Component, OnInit, Input } from '@angular/core';

interface Info {
  title: string;
  desc: string;
}


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

export class ServiceComponent implements OnInit {

  showDesc = true;
  displayLearn = {'display' : 'block'};
  displayInfo =  {'display' : 'none'};
  displayBox = {'flex-direction': 'row', 'justify-content': 'space-between'};

  constructor() { 
    this.name = '';
    this.info = [{title: '',desc: ''}];
    this.showDesc = true;
    this.displayBox = {'flex-direction': 'row', 'justify-content': 'space-between'};
  }

  toggleDesc = () => {
    if (this.showDesc){
      this.displayLearn = {'display' : 'none'};
      this.displayInfo = {'display' : 'block'};
      this.displayBox = {'flex-direction': 'column', 'justify-content': 'center'};
    } else {
      this.displayLearn = {'display' : 'block'};
      this.displayInfo = {'display' : 'none'};
      this.displayBox = {'flex-direction': 'row', 'justify-content': 'space-between'};
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

  getBox = () => {
    return this.displayBox;
  }

  @Input() name: string;
  @Input() info: Info[];

  ngOnInit(): void {
  }

}
