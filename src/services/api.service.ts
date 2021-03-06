import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {hostUrl} from './app.host';
import "rxjs";
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthService {
  constructor(private http: Http, private storage: LocalStorageService) {
  }
  login(user) {
    return this.http.post(hostUrl + "/api/authentification/login", user).map(response => response.json());
  }
  inscription(user) {
    return this.http.post(hostUrl + "/api/authentification/register", user).map(response => response.json());
  }

  profile() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(hostUrl + "/secure/profile", { headers: headers }).map(response => response.json());
  }
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', <string>this.storage.get("token"));
  }

  editProfile(user) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(hostUrl + "/secure/profile", user, { headers: headers }).map(() => {
      this.profile().subscribe(data => {
        this.storage.set("user", data);
      });
    });
  }
}
