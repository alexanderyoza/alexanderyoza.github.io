import { Component, OnInit } from '@angular/core';

interface Service {
  name: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  service: Service[];
  constructor() { 
    this.service = new Array<Service>(
    {
      name: "Bonding",
      description: "Desc",
    }, {
      name: "Bonding",
      description: "Desc",
    }, {
      name: "Bonding",
      description: "Desc",
    }, {
      name: "Bonding",
      description: "Desc",
    }, {
      name: "Bonding",
      description: "Desc",
    },
    )
  }

  ngOnInit(): void {
  }

}
