import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(5px)' }), 
        animate('500ms ease-in', style({ opacity: 1, transform: 'translateY(0px)' })),
      ]),
    ]),[
      trigger('fadeInOutSideBar', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translateY(0px)' }), 
          animate('200ms ease-in', style({ opacity: 1, transform: 'translateY(0px)' })),
        ]),
      ]),
      trigger('slideSide1', [
        state('in', style({ transform: 'translateX(0)' })),
        transition('void => *', [
          style({ transform: 'translateX(-300%)' }),
          animate('200ms ease-in')
        ]),
      ]),
      trigger('slideSide2', [
        state('in', style({ transform: 'translateX(0)' })),
        transition('void => *', [
          style({ transform: 'translateX(-300%)' }),
          animate('300ms ease-in')
        ]),
      ]),
      trigger('slideSide3', [
        state('in', style({ transform: 'translateX(0)' })),
        transition('void => *', [
          style({ transform: 'translateX(-300%)' }),
          animate('400ms ease-in')
        ]),
      ]),
    ],,
  ],
  
})
export class ProjectsComponent {
  showMessage = true


  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  
  } 
}
