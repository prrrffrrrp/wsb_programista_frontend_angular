import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sandwich } from './sandwich';

@Injectable({
  providedIn: 'root'
})
export class SandwichService {

  private url = "http://localhost:3000/sandwiches";

  constructor(private httpClient: HttpClient) { }

  getSandwiches(): Promise<Sandwich[]> {
    return this.httpClient.get<Sandwich[]>(this.url).toPromise();
  }

  getSandwich(sandwichId: string): Promise<Sandwich> {
    return this.httpClient.get<Sandwich>(`${this.url}/${sandwichId}`).toPromise();
  }

  postSandwich(sandwich: Sandwich): Promise<Sandwich> {
    return this.httpClient.post<Sandwich>(this.url, sandwich).toPromise();
  }

  findSandwiches(query: string, sort: string, order: 'asc' | 'desc'): Promise<Sandwich[]> {
    return this.httpClient.get<Sandwich[]>(`${this.url}?q=${query}&_sort=${sort}&_order=${order}`).toPromise();
  }
}
