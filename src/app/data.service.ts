import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/Rx';
import { Router } from "@angular/router";

@Injectable ()
export class DataService {
	constructor(private http: HttpClient, private router: Router){}
	users;
	index;
	getUsers() {
		return this.http.get('https://jsonplaceholder.typicode.com/users', {observe: 'body'}).map(
			(recipes ) => { this.users = recipes;
				return recipes
			})
	  }

	  getIndex(i){
		this.index = i;
		this.router.navigate(['user'])
		console.log(i)
	  }

}