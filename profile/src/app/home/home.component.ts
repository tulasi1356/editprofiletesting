import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public templates = ['../../assets/download.jpg','../../assets/download.jpg','../../assets/download.jpg',
  '../../assets/download.jpg' ,'../../assets/download.jpg','../../assets/download.jpg' ]
  edit(value:any) {
    if(value==1) {
      this.router.navigate(['/template1']);
      console.log(value)
    }
  }

}
