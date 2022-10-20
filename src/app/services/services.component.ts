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
      desc: `
      
      `,
    }, 
    {
      name: "Crowns",
      desc: `
      Crowns are synthetic caps, usually made of a material like porcelain, placed on the top of a tooth.
      Crowns are typically used to restore a tooth’s function and appearance following a 
      restorative procedure such as a root canal. When decay in a tooth has become so advanced that large 
      portions of the tooth must be removed, crowns are often used to restore the tooth.
      
      Crowns are also used to attach bridges, cover implants, prevent a cracked tooth from becoming worse, 
      or an existing filling is in jeopardy of becoming loose or dislocated. Crowns also serve an aesthetic use, 
      and are applied when a discolored or stained tooth needs to be restored to its natural appearance.
     `,
    }, 
    {
      name: "Bridges",
      desc: `
      Bridges are natural-looking dental appliances that can replace a section of missing teeth. Because 
      they are custom-made, bridges are barely noticeable and can restore the natural contour of teeth as 
      well as the proper bite relationship between upper and lower teeth.

      Bridges are sometimes referred to as fixed partial dentures, because they are semi-permanent and 
      are bonded to existing teeth or implants. There are several types of fixed dental bridges (cannot be removed),
       including conventional fixed bridges, cantilever bridges and resin-bonded bridges. Unlike a removable bridge,
        which you can take out and clean, your dentist can only remove a fixed bridge.
      Porcelain, gold alloys or combinations of materials are usually used to make bridge appliances.
      Appliances called implant bridges are attached to an area below the gum tissue, or the bone.
      `,
    },
    {
      name: "Specialty Dentures",
      desc: `
      Dentures are designed to replace missing teeth, and are worn by millions of Americans.
       Technological advancements have resulted in dentures that are lightweight and mimic the 
       look and feel of natural teeth. Most dentures are made from a combination of metals and 
       synthetic material such as acrylic resin.
      `,
    }, 
    {
      name: "Cosmetic Fillings",
      desc: `
      
      `,
    }, 
    {
      name: "Grafts",
      desc: `
      
      `,
    }, 
    {
      name: "Implants",
      desc: `
      
      `,
    }, 
    {
      name: "Veneers",
      desc: `
      
      `,
    }, 
    {
      name: "Whitening",
      desc: `
      
      `,
    }, 
    {
      name: "Laser Gum Therapy",
      desc: `
      
      `,
    }, 
    {
      name: "Sealants",
      desc: `
      
      `,
    }, 
    {
      name: "Braces",
      desc: `
      
      `,
    }, 
    {
      name: "Root Canal Therapy",
      desc: `
      
      `,
    }, 
    {
      name: "Extractions",
      desc: `
      
      `,
    }, 
    {
      name: "Excessive or Uneven Gums",
      desc: `
      
      `,
    }, 
    {
      name: "Scaling and Root Planing",
      desc: `
      
      `,
    }, 
    {
      name: "Dentures",
      desc: `
      
      `,
    }, 
    {
      name: "Cosmetic Dentistry",
      desc: `
      
      `,
    }, 
    {
      name: "Jaw/TMJ",
      desc: `
      
      `,
    }, 
    {
      name: "SureSmile®",
      desc: `
      
      `,
    }, 
    {
      name: "Professional Whitening",
      desc: `
      
      `,
    }, 
    )
  }

  ngOnInit(): void {
  }

}
