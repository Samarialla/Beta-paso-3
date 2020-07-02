import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data: any = {};
  email: any = {};
  password: any = {};

  constructor(public http: HttpClient, private router: Router) {
    this.data.email = '';
    this.data.response = '';

    this.http = http;
  }

  ngOnInit() {
  }

  login(form) {
    console.log(form);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const postData = {
      email: form.value.email,
      password: form.value.password
    };

    // this.http.post("http://localhost:3000/login", postData, httpOptions)
    //   .subscribe(data => {
    //     console.log(data['_body']);
    //    }, error => {
    //     console.log(error);
    //   });
    return this.http.post('http://localhost:8000/api/ionic', postData , httpOptions)
      .toPromise()
      .then(response => {
        if (response.success === true) {
          this.router.navigate(['./users']);
        }
      }).catch(err => {
        console.log(err);
      });
  }
}
