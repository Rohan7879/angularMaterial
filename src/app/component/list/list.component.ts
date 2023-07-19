import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  showTemplate = false;
  toggle() {
    this.showTemplate = !this.showTemplate;
    console.log(this.showTemplate);
  }
}
