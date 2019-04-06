import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../../service/data.service";


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private dataService:DataService,private route: ActivatedRoute){}

  ngOnInit() {
  
    this.formGroup = this.fb.group({
      firstname: ['', Validators.required],
      secondname: ['', Validators.required],
      thirdname: ['', Validators.required],
      fourthname: ['', Validators.required],
      fifthname: ['', Validators.required],
      sixname: ['', Validators.required],
      gender: ['', Validators.required],
      birthdate: ['', Validators.required],
      maritalstatus: ['', Validators.required],
      jobstatus: ['', Validators.required],
      email: ['', Validators.required],
      mobileno: ['', Validators.required],
      address: ['', Validators.required],
    });

  
}
onLogin(){
  window.location.href="login";
}
onSubmit() {

  if (this.formGroup.valid) {

    this.dataService.register(this.formGroup.value).subscribe(res => {
      var r = JSON.parse(JSON.stringify(res.body));
      window.location.href="familymembers"+r.results;
     
  },
    error => {
    })


  } else {
    Object.keys(this.formGroup.controls).forEach(field => {
      const control = this.formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}

isFieldValid(field: string) {
  return !this.formGroup.get(field).valid && this.formGroup.get(field).touched;
}

hasError(field: string) {
  return {
    'has-error control-label': this.isFieldValid(field),
  };
}

private markFormGroupTouched(formGroup: FormGroup) {

  Object.keys(this.formGroup.controls).forEach(field => {
    const control = this.formGroup.get(field);
    control.markAsTouched({ onlySelf: true });
  });
}


}
