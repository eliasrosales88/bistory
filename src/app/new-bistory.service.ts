import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewBistoryService {

  constructor() { }

  bistories = [
    {
      name: 'Montserrat',
      lastname: 'Gutierrez',
      birth: new Date(1930, 1, 14),
      description:'Some description'
    },
    {
      name: 'Simón',
      lastname: 'Bolivar',
      birth: new Date(1783, 7, 24),
      description:'Some description'
    }
  ]
}
