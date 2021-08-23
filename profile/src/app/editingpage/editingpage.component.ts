import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editingpage',
  templateUrl: './editingpage.component.html',
  styleUrls: ['./editingpage.component.scss']
})
export class EditingpageComponent implements OnInit {
  form: any;  
  public Editor = ClassicEditor;
  public imagearray=['../../assets/download.jpg','../../assets/download.jpg','../../assets/download.jpg','../../assets/download.jpg'];
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      cauroselone: new FormControl('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.', Validators.required),
      cauroseltwo: new FormControl('Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.Antonio Moreno Web Developer', Validators.required),
      cauroselthree: new FormControl('Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum. Michael Holz,Seo Analyst', Validators.required),
      cardtitle: new FormControl('Lorem ipsum dolor sit amet',Validators.required),
      cardtext: new FormControl('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.', Validators.required),

      // alternatesubtopics: this.fb.array([], Validators.required)
    })
  }

  ngOnInit(): void {
  }
  publish() {
    console.log(this.form.value);
  }
  selectFile(event,i) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.imagearray[i] = event.target.
      files[0]
      var reader = new FileReader();
      reader.onload = (event: any) => {
        // this.imagechecking = true;
        this.imagearray[i] = event.target.result;
      }
      reader.readAsDataURL(file);

    }
  }
}
