import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service'
import {Project} from "../../models/project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project:any= []; // or any

  constructor(private projectServices:ProjectService) { }

  ngOnInit(): void {
    this.projectServices.getProjects().subscribe(
      res => {
          this.project = res;
      },
      err => console.log(err)
    );
  }

}
