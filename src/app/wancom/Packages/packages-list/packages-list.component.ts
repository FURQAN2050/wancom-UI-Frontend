import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.scss']
})
export class PackagesListComponent implements OnInit {
  data: any[] = [
    ['', 'Tesla', 'Mercedes', 'Toyota', 'Volvo'],
    ['2019', 10, 11, 12, 13],
    ['2020', 20, 11, 14, 13],
    ['2021', 30, 15, 12, 13]
  ]
  settings: {
    rowHeaders: true,
    colHeaders: true,
    licenseKey: 'non-commercial-and-evaluation'
  }
  constructor() { }

  ngOnInit() {
  }

}
