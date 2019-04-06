
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../../service/data.service";
import { EditfamilymemberComponent } from "../editfamilymember/editfamilymember.component";
import { AddfamilymemberComponent } from "../addfamilymember/addfamilymember.component";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as $ from 'jquery';



@Component({
  selector: 'app-familymembers',
  templateUrl: './familymembers.component.html',
  styleUrls: ['./familymembers.component.css']
})
export class FamilymembersComponent implements OnInit {
  formGroup: FormGroup;
  id:"";
  gid:"";
  message:string="";
  bsModalRef: BsModalRef;
  family:any=[];
  constructor(private modalService: BsModalService,private fb: FormBuilder, private dataService:DataService,private route: ActivatedRoute){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.gid = params['gid'];
  });

  

    this.dataService.getfamily(this.id,this.gid).subscribe(response => {
      var r = JSON.parse(JSON.stringify(response));
      this.family=r.results;
     
  },
    error => {
    })

    
    this.formGroup = this.fb.group({
      id:[this.id],
      gid:[this.gid],
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

    setTimeout(() => {
    this.dataService.getrecord(this.id,this.gid).subscribe(response => {
      var r = JSON.parse(JSON.stringify(response));
      var res=r.results[0];
      if(r.results.length<=0){
        window.location.href="login";
        }
       
          this.formGroup.patchValue({ 
            id:this.id,
            gid:this.gid,
            firstname: res.firstname,
            secondname: res.secondname,
            thirdname: res.thirdname,
            fourthname: res.fourthname,
            fifthname: res.fifthname,
            sixname: res.sixname,
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
  }, 1000);
}
logout(){
  window.location.href="login";
}
addfamily(){
  this.bsModalRef = this.modalService.show(AddfamilymemberComponent, {animated: true, keyboard: false, backdrop: 'static', ignoreBackdropClick: false,class: 'modal-lg'});
}
 
editMember(mid:string){
    this.bsModalRef = this.modalService.show(EditfamilymemberComponent, {animated: true, keyboard: false, backdrop: 'static', ignoreBackdropClick: false,class: 'modal-lg'});
    this.bsModalRef.content.mid=mid;

}
onSubmit() {

  if (this.formGroup.valid) {
    this.dataService.editmain(this.formGroup.value).subscribe(res => {
      this.message="Information successfully updated";
      $("#alert").show();
      setTimeout(()=>{
        $("#alert").hide();
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
