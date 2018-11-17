import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  openCurtain(){
    console.log("OpenCurtainCall");
    this.apiService.callOpenCurtain().subscribe();
  }
  closeCurtain(){
    console.log("closeCurtainCall");
    this.apiService.closeOpenCurtain().subscribe();
  }
  stopCurtain(){
    console.log("stopCurtainCall");
    this.apiService.stopOpenCurtain().subscribe();
  }


}
