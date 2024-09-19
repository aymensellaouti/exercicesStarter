import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-listcvs',
  templateUrl: './listcvs.component.html',
  styleUrls: ['./listcvs.component.css']
})
export class ListcvsComponent {
  @Input() cvs: Cv[] = [];
}
