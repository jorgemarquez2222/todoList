import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  get products(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${environment.API_URL}/products`)
  }

}
