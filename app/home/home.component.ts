import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
  FormControl
} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: User[] = [];
  pageUsers: User[] = [];
  page = 1;

  handlePageChange(event: Event) {
    const e = event as CustomEvent;
    this.page = e.detail.page;

    const offset = (this.page - 1) * 10;
    this.pageUsers = this.users.slice(offset, offset + 10);
  }

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: faker.datatype.number({ min: 18, max: 60 }),
      });
    }

    this.pageUsers = this.users.slice(0, 10);
  }
}
