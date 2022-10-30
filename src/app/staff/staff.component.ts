import { Component, OnInit } from '@angular/core';

interface StaffMember {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})

export class StaffComponent implements OnInit {

  members: StaffMember[];
  constructor() { 
    this.members = new Array<StaffMember>(
      {
        name: 'Blanca', 
        description: `Blanca is originally from California and moved
        to beautiful Arizona 4 years ago. She has worked in 
        the dental field since 2002 as a front office associate and 
        treatment coordinator. Blanca began working with Dr. Yoza in 2009 and 
        enjoys the great family atmosphere as well as the team’s high 
        standards in patient care. She believes patient trust is very important. 
        She likes to celebrate when a patient takes the last step in finishing treatment
        and getting them back to a healthy state. Out of the office, 
        Blanca enjoys spending time with her three children and hiking.`,
        image: '/assets/blanca.jpeg'
      },
      {
        name: 'Angie',
        description: `Angela Espinoza is the GREATEST DENTAL 
        ASSISTANT here at Union Hills Family Dentistry. Angela graduated 
        from Apollo College Dental Assistant program in 2005; she has been an 
        assistant with Dr. Yoza since 2009. She is Certified in Radiology, C
        oronal Polishing, and CPR. Angela has worked with Periodontists, Endodontists, 
        Prostodontists and Oral Surgeons but prefers General and Cosmetic Dentistry citing, “ I enjoy 
        helping people regain the ability to smile”.Outside of work, Angela is happily married and has 
        two adopted cats. She enjoys all art and crafts including making greeting cards, sewing, painting and 
        reading. Being a native of Arizona, Angela has traveled all the over the Northern half of the state. 
        Ask her where the best spot to enjoy wine tasting or where to go to see the best view of the stars.`,
        image: '/assets/angie.jpeg'
      },
      {
        name: 'Kirsten',
        description: `Originally from Alaska, Kirsten moved to Arizona in July 2010. 
        She graduated from dental hygiene school in Mesa, Arizona and has over 5 years of dental experience. 
        In her spare time, Kirsten likes to check out new restaurants, play frolf, go geocaching, and traveling.`,
        image: '/assets/kirsten.jpeg',
      },
      {
        name: 'Desiree',
        description: `My name is Desiree. I’ve been in the dental industry for what seems to be my whole life. My mother
         is a Dental Assistant with over 34 years of experiences so I grew up in dental offices all over the valley 
         acquiring the knowledge and passion for treating patients. When I’m not seeing patients, I enjoy hiking and 
         travelling around the world with my son. I also enjoy volunteering for the Autism Speaks Foundation that provides 
         services for the Autism Community.`,
        image: '/assets/desiree.jpeg'
      },
      {
        name: 'Ann',
        description: `I am a second generation Arizonian.  Lived here when Phoenix was a small farming community.  
        I attended Central High School and had a fun time cruising central phoenix.  After high school I attended 
        Phoenix College and the dental hygiene school.  I graduated in the first class and we had to promote ourselves 
        to dentists as they were not aware of dental hygiene as a profession.  My first job was in general dentistry
         although my interests were in Periodontics.  I eventually ended up in Periodontics for 28 years and was certified in 
         expanded functions. I later switched my direction to general dentistry and Prosthodontics which was a new learning experience.  
         As the doc I was working for passed away from ALS, I became a new member of Dr. Yoza's Staff.  Always the best for last!  
         I am semi-retired now and still enjoy my old friends and patients who I adore.   Although athletics were fun for years, 
         I now enjoy my cabin and fishing in Alaska with my partner in crime Dan.  My 2 kids are grown and have 1 granddaughter and a cat. `,
        image: '/assets/ann.jpeg'
      },
      {
        name: 'Shelby',
        description: `hello world hello world hello world hello world hello world hello world 
        hello world hello world hello world hello world hello world hello world hello world hello world `,
        image: '/assets/shelby.jpeg'
      }
      );
  }

  ngOnInit(): void {
  }

}
