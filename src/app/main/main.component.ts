import { trigger, transition, style, animate, state } from '@angular/animations';
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
        animate('600ms ease-in', style({ opacity: 1, transform: 'translateY(0px)' })), 
      ]),
    ]),
    trigger('slideUp1', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(5%)' }),
        animate('200ms ease-in')
      ]),
    ]),
    trigger('slideUp2', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(5%)' }),
        animate('400ms ease-in')
      ]),
    ]),
    trigger('slideSide1', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-500%)' }),
        animate('400ms ease-in')
      ]),
    ]),
    trigger('slideSide2', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-500%)' }),
        animate('600ms ease-in')
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
