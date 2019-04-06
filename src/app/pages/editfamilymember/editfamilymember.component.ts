
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { ElementRef, Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../../service/data.service";
import { FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as $ from 'jquery';
@Component({
  selector: 'app-editfamilymember',
  templateUrl: './editfamilymember.component.html',
  styleUrls: ['./editfamilymember.component.css']
})
export class EditfamilymemberComponent implements OnInit {
  formGroup: FormGroup;
  public mid:"";
  message:string="";
  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder, private dataService:DataService,private route: ActivatedRoute){}

  ngOnInit() {


    this.formGroup = this.fb.group({
      mid:[''],
      firstname: ['', Validators.required],
      gender: ['', Validators.required],
      birthdate: ['', Validators.required],
      maritalstatus: ['', Validators.required],
      jobstatus: ['', Validators.required],
      email: ['', Validators.required],
      mobileno: ['', Validators.required],
      address: ['', Validators.required],
    });

    setTimeout(() => {
    this.dataService.getfamilyrecord(this.mid).subscribe(response => {
      var r = JSON.parse(JSON.stringify(response));
      var res=r.results[0];
      if(r.results.length<=0){
      //  window.location.href="login";
        }
      this.formGroup.patchValue({ 
        mid:this.mid,
        firstname: res.firstname,
        gender: res.gender,
        birthdate: res.birthdate,
        maritalstatus: res.maritalstatus,
        jobstatus: res.jobstatus,
        email: res.email,
        mobileno: res.mobile,
        address: res.address,
       })
      
     
  },
    error => {
    })
  
  }, 300);
   
    
}





 
onSubmit() {

  if (this.formGroup.valid) {
    this.dataService.editfamilymember(this.formGroup.value).subscribe(res => {
      this.message="Information successfully updated";
      $("#alert1").show();
      setTimeout(()=>{
        $("#alert1").hide();
      },5000)
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
