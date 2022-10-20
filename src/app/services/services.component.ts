import { Component, OnInit } from '@angular/core';

interface Service {
  name: string;
  info: [{
    title: string,
    desc: string
  }];
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
      info: [{
        title: `What is Bonding?`,
        desc: ` An alternative to veneers is a process called bonding, 
        in which a tooth-colored material that looks like the enamel 
        of your teeth is molded and shaped, and then hardened and polished.
        Bonding can be used to improve the color of a tooth, or close unsightly gaps.
        Bonding is generally not as permanent a process as veneers, and 
        can be vulnerable to the same kind of staining your natural teeth 
        are prone to. Bonding can also be more prone to chips and cracks than veneers.
        Caps are generally preferred to bonding when such a procedure isn’t deemed to
        be effective in the long run.
        `,
      }]
      
    }, 
    {
      name: "Cosmetic and Contouring",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Crowns and Bridges",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 

    {
      name: "Specialty Dentures",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Cosmetic Fillings",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Grafts",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Implants",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Veneers",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Whitening",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Laser Gum Therapy",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Sealants",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Braces",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Root Canal Therapy",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Extractions",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Excessive or Uneven Gums",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Scaling and Root Planing",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Dentures",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Cosmetic Dentistry",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Jaw/TMJ",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "SureSmile®",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    {
      name: "Professional Whitening",
      info: [{
        title: ``,
        desc: ``,
      }]
    }, 
    )
  }

  ngOnInit(): void {
  }

}
