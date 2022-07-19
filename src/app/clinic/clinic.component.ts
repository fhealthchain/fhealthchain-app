import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {

  listOfData: any[] = [
    {
      key: '1',
      name: 'EHR 1',
      age: 'lorem',
      address: new Date()
    },
    {
      key: '2',
      name: 'EHR 2',
      age: 'lorem',
      address: new Date()
    },
    {
      key: '3',
      name: 'EHR 3',
      age: 'lorem',
      address: new Date()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
