import { Component, OnInit } from '@angular/core';
import { faBoxOpen,faUser, faUsers,faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faBoxOpen = faBoxOpen;
  faUser = faUser;
  faUsers = faUsers;
  faTrophy = faTrophy


  constructor() { }

  ngOnInit() {
  }

}
