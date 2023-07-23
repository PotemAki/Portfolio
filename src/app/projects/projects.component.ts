import { animate, style, transition, trigger } from '@angular/animations';
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
          animate('500ms ease-in', style({ opacity: 1, transform: 'translateY(0px)' })),
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
