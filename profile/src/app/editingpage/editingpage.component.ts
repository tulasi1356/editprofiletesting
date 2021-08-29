import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-editingpage',
  templateUrl: './editingpage.component.html',
  styleUrls: ['./editingpage.component.scss']
})
export class EditingpageComponent implements OnInit {
  form: any;  
  public Editor = ClassicEditor;
  public loader=false;
  public publishvarible=false;
  public imagearray=['../../assets/download.jpg','../../assets/download.jpg','../../assets/download.jpg','../../assets/download.jpg'];
  public imagearray1=['../../assets/download.jpg','../../assets/download.jpg','../../assets/download.jpg'];
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware'];
    public data:any = []
  constructor(private fb: FormBuilder,private http: HttpClient) {
 
 
  }

  ngOnInit(): void {
    console.log('entered data here')
    const url ='../../assets/editing.json';
   this.http.get(url).subscribe((res)=>{
     this.data = res
    //  console.log(this.data[0].captionofheadimage,';;;;;;;;;;;;;;')
     this.form = this.fb.group({
      caption:new FormControl(this.data[0].captionofheadimage,Validators.required),
      // cauroselone: new FormControl('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.', Validators.required),
      // cauroseltwo: new FormControl('Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.Antonio Moreno Web Developer', Validators.required),
      // cauroselthree: new FormControl('Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum. Michael Holz,Seo Analyst', Validators.required),
      cardtitle: new FormControl(this.data[0].fourimageheading,Validators.required),
      cardtext: new FormControl(this.data[0].fourimagedescription, Validators.required),
      cardtitle2: new FormControl(this.data[0].oneimageheading,Validators.required),
      cardtext2: new FormControl(this.data[0].oneimagedescription, Validators.required),
      doctortext1:new FormControl(this.data[0].Doctordescription, Validators.required),
      doctortext2:new FormControl(this.data[0].Doctordescription, Validators.required),
      doctortext3:new FormControl(this.data[0].Doctordescription, Validators.required),
      doctortext4:new FormControl(this.data[0].Doctordescription, Validators.required),
      servicecontent:new FormControl(this.data[0].OurServicescontent, Validators.required),
     
      // cardsarray: new FormArray([
      //   // this.initQuestion(),
      // ]),
      // alternatesubtopics: this.fb.array([], Validators.required)
    })
    //  console.log(this.form.value,';;;;;;;;;;;;;;;;;')
    this.loader=true;
     console.log('json working',this.data)
   })
  }
  publish() {
    this.publishvarible=true;
    // console.log(this.form.value,'pppppppp')
  }
  selectFile(event,i) {
    console.log('i=',i);
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      // this.imagearray[i] = event.target.files[0]
      var reader = new FileReader();
      reader.onload = (event: any) => {
        // this.imagechecking = true;
        // this.imagearray[i] = event.target.result;
        this.data[0].fourimages[i]=event.target.result;
      }
      reader.readAsDataURL(file);

    }
  }
  selectCardFile(event,i) {
    console.log('i=',i);
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.imagearray1[i] = event.target.
      files[0]
      var reader = new FileReader();
      reader.onload = (event: any) => {
        // this.imagechecking = true;
        this.imagearray1[i] = event.target.result;
      }
      reader.readAsDataURL(file);

    }
  }
}
