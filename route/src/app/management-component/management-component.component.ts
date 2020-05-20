import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-management-component',
  templateUrl: './management-component.component.html',
  styleUrls: ['./management-component.component.css']
})
export class ManagementComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
