import { Component, OnInit } from '@angular/core';

interface Service {
  name: string;
  desc: string;
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
      desc: `An alternative to veneers is a process called bonding, 
      in which a tooth-colored material that looks like the enamel 
      of your teeth is molded and shaped, and then hardened and polished.
       Bonding can be used to improve the color of a tooth, or close unsightly gaps.
      Bonding is generally not as permanent a process as veneers, and 
      can be vulnerable to the same kind of staining your natural teeth 
      are prone to. Bonding can also be more prone to chips and cracks than veneers.
      Caps are generally preferred to bonding when such a procedure isn’t deemed to
       be effective in the long run.
      
       `,
    }, 
    {
      name: "Cosmetic and Contouring",
      desc: "Desc",
    }, 
    {
      name: "Crowns and Bridges",
      desc: "Desc",
    }, 
    {
      name: "Specialty Dentures",
      desc: "Desc",
    }, 
    {
      name: "Cosmetic Fillings",
      desc: "Desc",
    }, 
    {
      name: "Grafts",
      desc: "Desc",
    }, 
    {
      name: "Implants",
      desc: "Desc",
    }, 
    {
      name: "Veneers",
      desc: "Desc",
    }, 
    {
      name: "Whitening",
      desc: "Desc",
    }, 
    {
      name: "Laser Gum Therapy",
      desc: "Desc",
    }, 
    {
      name: "Sealants",
      desc: "Desc",
    }, 
    {
      name: "Braces",
      desc: "Desc",
    }, 
    {
      name: "Root Canal Therapy",
      desc: "Desc",
    }, 
    {
      name: "Extractions",
      desc: "Desc",
    }, 
    {
      name: "Excessive or Uneven Gums",
      desc: "Desc",
    }, 
    {
      name: "Scaling and Root Planing",
      desc: "Desc",
    }, 
    {
      name: "Dentures",
      desc: "Desc",
    }, 
    {
      name: "Cosmetic Dentistry",
      desc: "Desc",
    }, 
    {
      name: "Jaw/TMJ",
      desc: "Desc",
    }, 
    {
      name: "SureSmile®",
      desc: "Desc",
    }, 
    {
      name: "Professional Whitening",
      desc: "Desc",
    }, 
    )
  }

  ngOnInit(): void {
  }

}
