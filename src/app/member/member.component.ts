import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor() { 
    this.name = '';
    this.description = '';
    this.image = '';
  }

  @Input() name: string;
  @Input() description: string;
  @Input() image: string;

  ngOnInit(): void {
  }

}
