
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../../service/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mobileno: string = "";
  constructor(private fb: FormBuilder, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  onLogin() {

    if (this.mobileno != "") {
      this.dataService.login(this.mobileno).subscribe(res => {
        var r = JSON.parse(JSON.stringify(res));
        if(r.results.length>0){
          window.location.href="familymembers?id="+r.results[0].parentid+"&gid="+r.results[0].gid;
        }else{
          alert("Unrecognize mobile no.")
        }
      },
        error => {
        })

    }
  }

  onRegister() {

    window.location.href = "register";

  }


}
