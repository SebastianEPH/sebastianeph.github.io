import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../models/project'
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  API_URI = 'http://localhost:5000/api/project'
  constructor(public http:HttpClient) { }
  getProjects(){
    return this.http.get(`${this.API_URI}/`)
  }
  getProject(id:String){
    return this.http.get(`${this.API_URI}/${id}`)
  }
  saveProject(project:Project){
      return this.http.post(`${this.API_URI}/save`, project)
  }

}
