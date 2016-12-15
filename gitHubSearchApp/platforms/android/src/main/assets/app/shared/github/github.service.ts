import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class GitHubService {
	baseUrl:string;
	constructor(private http: Http) {
		this.baseUrl="https://api.github.com/"
	}

	getRepos(username) {
		return this.http.get(this.baseUrl+'users/' + username + '/repos');
	}

	getFile(repo) {
		let headers = new Headers();
		headers.append(
			'Accept', 'application/vnd.github.VERSION.html');
		return this.http.get(
			repo.url , {headers: headers});
	}
	getUser(username) {
		return this.http.get(this.baseUrl+'users/' + username );
	}
	getStarred(username) {
		return this.http.get(this.baseUrl+'users/' + username + '/starred' );
	}
	getRepoContent(repo,isfirst){
		if(isfirst){
			return this.http.get(repo.url + '/contents');
		}else{
			return this.http.get(repo.url );
		}
		
	}
	getRepoLang(url){
		return this.http.get(url);
	}
	searchUsers(username){
		return this.http.get(this.baseUrl+'search/users?q='+username+"+in:login");
	}
	getBars(){
		return this.http.get("http://pptest-kwiatchris.rhcloud.com/bars/findall");
	}
}