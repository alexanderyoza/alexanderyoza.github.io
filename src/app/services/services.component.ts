import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

interface Info {
    title: string;
    desc: string;
}

interface Service {
  name: string;
  info: Info[];
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
      info: new Array<Info>({
        title: `What is Bonding?`,
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
      })
      
    }, 
    {
      name: "Cosmetic and Contouring",
      info: new Array<Info>(
        {
          title: 'coming',
          desc: 'coming'
        },

      )
      
    }, 
    {
      name: "Crowns and Bridges",
      info: new Array<Info>(
        {
          title: 'Bridge',
          desc: `Bridges are natural-looking dental appliances 
          that can replace a section of missing teeth. Because 
          they are custom-made, bridges are barely noticeable and 
          can restore the natural contour of teeth as well as the 
          proper bite relationship between upper and lower teeth.

          Bridges are sometimes referred to as fixed partial dentures, 
          because they are semi-permanent and are bonded to existing 
          teeth or implants. There are several types of fixed dental bridges 
          (cannot be removed), including conventional fixed bridges, cantilever 
          bridges and resin-bonded bridges. Unlike a removable bridge, which 
          you can take out and clean, your dentist can only remove a fixed bridge.
          Porcelain, gold alloys or combinations of materials are usually used 
          to make bridge appliances.
          Appliances called implant bridges are attached to an area below the 
          gum tissue, or the bone.`
        },
        {
          title: 'Crowns',
          desc: `Crowns are synthetic caps, usually made of a material like 
          porcelain, placed on the top of a tooth.
          Crowns are typically used to restore a tooth’s function and appearance 
          following a restorative procedure such as a root canal. When decay in a 
          tooth has become so advanced that large portions of the tooth must be 
          removed, crowns are often used to restore the tooth.
          
          Crowns are also used to attach bridges, cover implants, prevent a 
          cracked tooth from becoming worse, or an existing filling is in 
          jeopardy of becoming loose or dislocated. Crowns also serve an 
          aesthetic use, and are applied when a discolored or stained tooth 
          needs to be restored to its natural appearance.`
        },
      )
    }, 

    {
      name: "Specialty Dentures",
      info: new Array<Info>(
        {
          title: 'What are dentures?',
          desc: `Dentures are designed to replace missing teeth, and are worn by 
          millions of Americans. Technological advancements have resulted in 
          dentures that are lightweight and mimic the look and feel of natural 
          teeth. Most dentures are made from a combination of metals and synthetic 
          material such as acrylic resin.Types of dentures

          Dentures are generally classified as partial or full. Partial dentures are 
          designed to replace a small section of teeth, and help prevent existing 
          healthy natural teeth from shifting position; full dentures generally 
          replace an entire set of teeth such as upper and lower dentures.
          
          Many candidates for conventional dentures (also called “immediate” dentures) 
          are able to wear the appliances immediately following removal of affected 
          natural teeth.
          
          Before immediate dentures are worn, a mold of the patient’s mouth – 
          specifically the jaws – must be made in order for the dentures to 
          be customized for the individual.
          
          Partial dentures, also sometimes called “overdentures,” are designed to 
          fit over a small section of implants or natural teeth. Partial dentures 
          are characteristic by their pinkish gum-like plastic bases, on to which 
          replacement teeth are attached. Small clasps are used to attach the denture 
          to existing teeth. Some clasps, which can be more expensive, are made of 
          natural-looking material that is hard-to-detect.
          
          In some cases, a crown will be installed on an existing healthy tooth to 
          facilitate a better hold for the clasp.`
        },
        {
          title: 'Care of your denture',
          desc: `Dentures today are made from very advanced materials designed 
          to give you a natural appearance.

          However, keep in mind that just like your teeth, dentures should 
          be cared for with diligence. This means daily brushing and regular 
          visits to your dentist for minor adjustments.
          
          Just like natural teeth, dentures need to be cleansed of plaque, 
          food particles and other debris. Keeping your dentures in top shape 
          will also help keep the soft tissues of your mouth healthy; an unclean or malformed denture can cause infections and irritation.
          
          Remember to rinse and brush your dentures after every meal, and 
          soak them in denture solution overnight. This also allows your 
          gums to breathe while you sleep.

          Over time, even daily care of your dentures may require them to 
          be cleaned by the dentist. A powerful ultrasonic cleaner may 
          be used to remove hard accumulations of tartar and other substances.`
        },
        {
          title: 'Adjustments',
          desc: `People’s mouths undergo change all of the time. 
          Gums change shape; in many cases, gums tend to shrink over time after 
          teeth have been extracted.

          Most denture wearers experience a break-in period of as long as two 
          months, during which the tissues surrounding their extracted teeth must 
          heal. Conventional denture wearers must periodically visit their dentist 
          to have the appliances adjusted. This is because patient’s gums sometimes 
          change shape or shrink; moreover, daily maintenance of the appliances over
           time may also obviate the need for minor adjustments.
          
          Adjustments are critical because a loose-fitting appliance, or one that has 
          not been adjusted to compensate for gum or jaw changes could cause pressure 
          points, leading to mouth sores and possible infection. Regular dental visits 
          also provide an opportunity to replace or repair loose teeth, or make small 
          repairs to dentures that may have become chipped or cracked.
          
          Over the long run, the base of a denture may need to be “re-lined” because 
          of wear and tear from constantly rubbing against your soft palate or roof 
          of your mouth.`
        },
        {
          title: 'Common concerns',
          desc: `Technology advancements have made dentures very natural 
          looking; however, it is only natural for first-time denture wearers 
          to be self-conscious about their appearance and speech. Over time, 
          a denture wearer’s confidence level increases, and this usually ceases 
          to be an issue.

          Like any new thing, caring for dentures takes practice.
          
          Under normal circumstances, denture wearers can eat most foods 
          with confidence that their appliance will not shift. Caution must 
          be taken, however, to avoid certain kinds of hot, hard, crunchy, 
          chewy or sticky foods. During the break-in period, denture wearers 
          are usually advised to eat on both sides of their mouth so the appliances 
          don’t get out of balance, or tip to one side.`
        },
        {
          title: 'Denture adhesives',
          desc: `In general, dentures that fit well may still need a small measure 
          of help staying put. A good quality denture adhesive is acceptable. 
          Older, poorly fitting dentures may damage the soft tissues of the mouth, 
          and should be replaced as soon as possible.`
        }
      )
    }, 
    {
      name: "Cosmetic Fillings",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "Grafts",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "Implants",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "Veneers",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "Whitening",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "Laser Gum Therapy",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "Sealants",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
  
    {
      name: "Braces",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "Root Canal Therapy",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "Extractions",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "Excessive or Uneven Gums",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "Scaling and Root Planing",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "Dentures",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "Cosmetic Dentistry",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "Jaw/TMJ",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "SureSmile®",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    {
      name: "Professional Whitening",
      info: new Array<Info>(
        {
          title: 'her',
          desc: 'her'
        },
      )
    }, 
    )
  }

  ngOnInit(): void {
  }

}
