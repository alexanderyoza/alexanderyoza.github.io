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
        name: 'Blanca Macias, Office Manager', 
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
        name: 'Angie, The Greatest Dental Assistant',
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
        description: `hello world hello world hello world hello world hello world hello world 
        hello world hello world hello world hello world hello world hello world hello world hello world 
        hello world hello world hello world hello world hello world hello world hello world hello world `,
        image: '/assets/desiree.jpeg'
      },
      {
        name: 'Ann',
        description: `hello world hello world hello world hello world hello world hello world
        hello world hello world hello world hello world hello worldhello worldhello worldhello world.`,
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
