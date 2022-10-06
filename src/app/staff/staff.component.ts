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
        image: '/assets/python.png'
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
        image: '/assets/python.png'
      },
      {
        name: 'Kirsten',
        description: `Originally from Alaska, Kirsten moved to Arizona in July 2010. 
        She graduated from dental hygiene school in Mesa, Arizona and has over 5 years of dental experience. 
        In her spare time, Kirsten likes to check out new restaurants, play frolf, go geocaching, and traveling.`,
        image: '/assets/python.png',
      },
      {
        name: 'Vanessa Schaeffer',
        description: `Vanessa Schaeffer is our newest Dental Assistant here at Union Hills Family Dentistry! She 
        joined us in April of 2014 and has quickly become part of our dental family. Vanessa is a native of Arizona 
        and has hiked all the trails surrounding the greater Phoenix area. Always a busy bee, Vanessa trains for 5Ks 
        and half marathons. Her collection of medals includes RunDisney Tinkerbell and Princess Half Marathons and San 
        Francisco Hike Women’s Half Marathon. She has two adopted cats, Harlow and Whiskey, named after her love of Country music. 
        She can teach you fun line dances and loves to two-step. Always laughing and smiling, she is a great addition to our office 
        and will make you feel at ease and right at home.`,
        image: '/assets/python.png'
      },
      {
        name: 'Katie, Dental Hygienist',
        description: `Originally from Washington State, Katie moved to the Phoenix area to enjoy warmer weather and to further her 
        hygiene career. As a graduate from Eastern Washington University, she earned a Bachelors of Science in dental hygiene 
        and has over 4 years of experience in the dental field. Outside of work Katie enjoys traveling, staying active, attending 
        sporting events, and spending time with friends and family.`,
        image: '/assets/python.png'
      }
      );
  }

  ngOnInit(): void {
  }

}
