import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  formName: string;
  sno: number;
  uploadDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sno: 1, formName: 'I-20', uploadDate: '1/17/2018 4:43:31 PM'},
  {sno: 2, formName: 'Employment Authorization Document', uploadDate: '2/17/2018 4:43:31 PM'},
  {sno: 3, formName: 'Social Security Number', uploadDate: '1/17/2017 4:43:31 PM'},
];

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  dataSource=ELEMENT_DATA;
  displayedColumns: string[] = ['sno', 'formName', 'uploadDate'];

  constructor() { }

  ngOnInit() {
  }

}
