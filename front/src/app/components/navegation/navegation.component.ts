import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service'


@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  constructor(private projectServices:ProjectService) { }

  ngOnInit(): void {
    //this.projectServices.getProjects().subscribe(
    //  res=>console.log(res),
    //  err=>console.log(err)
    //)
  }

}
