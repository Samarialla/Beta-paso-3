import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

	public usuarios : Array<Object> = [];
	public data : Array<Object> = [];

  constructor( public http: HttpClient, private router: Router) {

	const httpOptions = {
		headers: new HttpHeaders({
		  'Content-Type': 'application/json'
		})
	  }
	  let postData = {
  
		"email": "sergojavier23@gmail.com.py",
		"password": "Samarilla*2018"
	  }
  
	  // this.http.post("http://localhost:3000/login", postData, httpOptions)
	  //   .subscribe(data => {
	  //     console.log(data['_body']);
	  //    }, error => {
	  //     console.log(error);
	  //   });
	  this.http.get('http://localhost:8000/api/user',httpOptions)
		.toPromise()
		.then(res => {
		this.usuarios=res.data;
		})
		.catch(err => {
		  console.log(err)
		})
	}
//   	this.usuarios = [
//   		{
//   			"name" : "Discork",
//   			"email" : 'discork@email.com',
//   			"phone" : '3216547890',
//   			"gender" : 'M'
//   		},
//   		{
//   			"name" : "Mega",
//   			"email" : 'discork@email.com',
//   			"phone" : '3216547890',
//   			"gender" : 'F'
//   		},
//   		{
//   			"name" : "Legend",
//   			"email" : 'discork@email.com',
//   			"phone" : '3216547890',
//   			"gender" : 'M'
//   		},
//   		{
//   			"name" : "Pac-Man",
//   			"email" : 'discork@email.com',
//   			"phone" : '3216547890',
//   			"gender" : 'M'
//   		},
//   		{
//   			"name" : "Super",
//   			"email" : 'discork@email.com',
//   			"phone" : '3216547890',
//   			"gender" : 'F'
//   		},
//   		{
//   			"name" : "Mario",
//   			"email" : 'discork@email.com',
//   			"phone" : '3216547890',
//   			"gender" : 'M'
//   		},
//   		{
//   			"name" : "World",
//   			"email" : 'discork@email.com',
//   			"phone" : '3216547890',
//   			"gender" : 'M'
//   		},
//   		{
//   			"name" : "Zelda",
//   			"email" : 'discork@email.com',
//   			"phone" : '3216547890',
//   			"gender" : 'F'
//   		},
//   		{
//   			"name" : "Discork",
//   			"email" : 'discork@email.com',
//   			"phone" : '3216547890',
//   			"gender" : 'F'
//   		}
//   	];
//   }

  ngOnInit() {
  }

}
