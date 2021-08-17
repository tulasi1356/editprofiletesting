import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss']
})
export class Template1Component implements OnInit {
  form: any;

  constructor(private fb: FormBuilder) {


    this.form = this.fb.group({
      heading: new FormControl('', Validators.required),
      meeting: new FormControl('', Validators.required),
    })
   }

  ngOnInit(): void {
  }

}
