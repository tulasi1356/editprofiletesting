import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss']
})
export class Template1Component implements OnInit {
  form: any;

  constructor(private fb: FormBuilder,private router:Router) {


    this.form = this.fb.group({
      heading: new FormControl('', Validators.required),
      meeting: new FormControl('', Validators.required),
    })
   }

  ngOnInit(): void {
  }
  edit() {
    this.router.navigate(['/editingpage']);

  }

}
