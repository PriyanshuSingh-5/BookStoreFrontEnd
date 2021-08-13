import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myorders(){}
  mywishlist(){}
  Logout(){}
  onsignup(){}
  openDialog(){}
  openDialogztoedit(){}
  OnSelectedFile(){}
}

