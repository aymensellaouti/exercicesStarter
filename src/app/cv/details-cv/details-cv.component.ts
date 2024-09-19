import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;

  constructor() {
    // const id = this.acr.snapshot.params['id'];
    // this.cvService.getCvById(id).subscribe({
    //   next: (cv) => this.cv = cv,
    //   error: () => this.router.navigate([APP_ROUTES.cv])
    // })
  }
}
