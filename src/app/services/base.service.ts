import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  API_URL: string = 'https://5f779702d5c9cb001623760a.mockapi.io/api/v1/';

  constructor() { }
}
