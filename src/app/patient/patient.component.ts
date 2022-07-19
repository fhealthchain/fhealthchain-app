import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  listOfData: any[] = [
    {
      key: '1',
      name: 'EHR 1',
      desc: 'lorem',
      date: new Date()
    },
    {
      key: '2',
      name: 'EHR 2',
      desc: 'lorem',
      date: new Date()
    },
    {
      key: '3',
      name: 'EHR 3',
      desc: 'lorem',
      date: new Date()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
