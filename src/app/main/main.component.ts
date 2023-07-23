import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0px)' }),
        animate('1000ms ease-in', style({ opacity: 1, transform: 'translateY(-20px)' })), 
      ]),
    ]),trigger('fadeInOutbody', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0px)' }), 
        animate('1000ms ease-in', style({ opacity: 1, transform: 'translateY(-10px)' })), 
      ]),
    ]),
  ],
})
export class MainComponent {

  constructor (private router: Router, private route: ActivatedRoute ) { }

  toCV() {
    this.router.navigate(['/cv'], {relativeTo: this.route})
  }
  toProjects() {
    this.router.navigate(['/projects'], {relativeTo: this.route})
  }
}
