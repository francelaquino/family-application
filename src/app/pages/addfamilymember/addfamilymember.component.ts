import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../../service/data.service";
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-addfamilymember',
  templateUrl: './addfamilymember.component.html',
  styleUrls: ['./addfamilymember.component.css']
})
export class AddfamilymemberComponent implements OnInit {
  formGroupMember: FormGroup;
  id:"";
  gid:"";
  constructor(public bsModalRef: BsModalRef,private fb: FormBuilder, private dataService:DataService,private route: ActivatedRoute){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.gid = params['gid'];
  });

  
    this.formGroupMember = this.fb.group({
      id:[this.id],
      gid:[this.gid],
      firstnameMember: ['', Validators.required],
      genderMember: ['', Validators.required],
      birthdateMember: ['', Validators.required],
      maritalstatusMember: ['', Validators.required],
      jobstatusMember: ['', Validators.required],
      emailMember: ['', Validators.required],
      mobilenoMember: ['', Validators.required],
      addressMember: ['', Validators.required],
    });

    
  
}


 
onSubmit() {

  if (this.formGroupMember.valid) {
    this.dataService.savefamilymember(this.formGroupMember.value).subscribe(res => {
      alert("Family member successfully added");
      this.bsModalRef.hide();
  },
    error => {
    })


  } else {
    Object.keys(this.formGroupMember.controls).forEach(field => {
      const control = this.formGroupMember.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}

isFieldValid(field: string) {
  return !this.formGroupMember.get(field).valid && this.formGroupMember.get(field).touched;
}

hasError(field: string) {
  return {
    'has-error control-label': this.isFieldValid(field),
  };
}

private markFormGroupTouched(formGroup: FormGroup) {

  Object.keys(this.formGroupMember.controls).forEach(field => {
    const control = this.formGroupMember.get(field);
    control.markAsTouched({ onlySelf: true });
  });
}


}
