import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable,  Subscription } from "rxjs";
import { Cv } from "../model/cv.model";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent {
  form!: FormGroup;
  cvs$!: Observable<Cv[]>;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({ name: new FormControl() });
    const nameInput = this.form.controls['name'];
  }
}
