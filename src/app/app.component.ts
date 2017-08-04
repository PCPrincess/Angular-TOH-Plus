import { Component } from '@angular/core';

export class Project {
  id: number;
  name: string;
  type: string;
  info: string;
}

const PROJECTS: Project[] = [
  { id: 1, name: 'Ideally Speaking', type: 'News and Community Website', info: 'http://ideallyspeaking.net'},
  { id: 2, name: 'RepresentativeApp', type: 'Android', info: 'C:\\Users\\Lori\\AndroidStudioProjects\\RepresentativeApp'},
  { id: 3, name: 'Angular Playground', type: 'Angular', info: 'https://github.com/PCPrincess/Angular-TOH-Plus'},
  { id: 4, name: '', type: '', info: ''},
  { id: 5, name: '', type: '', info: ''}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <h2>{{project.name}} details!</h2>
    <div><label>id: </label>{{project.id}}</div>
    <div><label>type: </label>{{project.type}}</div>
    <div>
      <label>info: </label>
      <input [(ngModel)]="project.info" placeholder="info">
    </div>
    <h2>My Projects</h2>
    <ul class="projects">
      <li *ngFor="let project of projects">
        <span class="badge">{{project.id}}</span>
        {{project.name}}
        {{project.type}}
        {{project.info}}
      </li>
    </ul>
  `
})
export class AppComponent {
  title = 'PCPrincess\' Portfolio';
  projects = PROJECTS;
  project: Project = {
    id: 100,
    name: 'Ideally Speaking',
    type: 'News and Community Website',
    info: 'http://ideallyspeaking.net'
  };
}
