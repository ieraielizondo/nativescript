import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { GitHubService } from "../../shared/github/github.service"

@Component({
  selector: "my-app",
  providers: [GitHubService],
  templateUrl: "pages/home/home.html",
  styleUrls: ["pages/home/home-common.css"]
})
export class HomeComponent{
  public username: string;
  public foundUsers: any[];
  public user: string;
  public log1: string;
  public bars:string;
  public isLoading: boolean;

  constructor(private gitHub: GitHubService){
    this.log1="esperando...";
    this.isLoading=false;
  }
  getBars(){
    this.isLoading=!this.isLoading;
    this.gitHub.getBars().subscribe(
      data=>{
        console.log(JSON.stringify(data.json()));
         console.log("Cuenta: "+data.json.length);
        this.bars=data.json();
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log("getBarsComplete.");
        this.isLoading=!this.isLoading;
      }
    );
  }
  findUsers(){
    if(this.username!=undefined && this.username!=""){
      
      this.gitHub.searchUsers(this.username).subscribe(
        data=>{
          console.log("Numero de resultados: "+data.json().total_count);
          this.log1=data.json().total_count+" resultados";
          this.foundUsers=data.json().items;
        },
        err=>{
          console.log("SearchUsers error."+err)
          this.log1="Algo falló";
        },
        ()=>{
          //console.log("findUsers completed");
        }
      );
    }    
  }
  getrepos(){
    this.log1="usename: "+this.username;
    if(this.username==""){
      this.log1="usename: vacio";
     
      return;
    }
    this.gitHub.getUser(this.username).subscribe(
      data=>{
        this.user=data.json();
        this.log1= data.toString();
        console.log(data.json());
      },
      err=>{
        this.log1="error "+err.toString();
        console.log(err);
      },
      ()=> {
        this.log1="getuser completo";
        console.log("get user Complete");
      }
    )
  }
  prueba(user:any){
    alert(user.login);
  }
}