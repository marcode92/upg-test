import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudUserService } from '../crud-user.service';

export interface User{
  name:string,
  surname:string,
  city:string
}

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.scss']
})
export class UserCrudComponent {

  getName(){
    return this.crudForm.controls.name.value || '';
  }

  getSurname(){
    return this.crudForm.controls.surname.value || '';
  }

  getCity(){
    return this.crudForm.controls.city.value || '';
  }
  constructor(private readonly crudUserService: CrudUserService){}
  
  crudForm = new FormGroup({
    name : new FormControl(''),
    surname : new FormControl(''),
    city : new FormControl('')    
  })

  onSubmit(){
    this.crudUserService.createUser({
      name: this.getName(),
      surname: this.getSurname(),
      city: this.getCity(),
    }).subscribe();
  }
}
