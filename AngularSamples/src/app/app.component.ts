import { Component } from '@angular/core';
import {AccountInformation} from './AccountInformation';
import {ShowDateTime} from './IDateTime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements ShowDateTime {
  title = 'AngularSamples';

  dateTimedetails:string;
  displaydt:Date;

constructor ()
{
  this.displaydt=new Date();
  this.dateTimedetails=this.displaydt.toString();
}

name = 'Display Account details using oneway binding, ngIF, ngFor';
  twowaytext='Twoway binding';
  setTwowaybind:string="Hello";
  accountlist=[
    new AccountInformation(1,'Siva'),
    new AccountInformation(2,'Babu'),
    new AccountInformation(3,'Arun'),
    new AccountInformation(4,'Nandha')
  ];

  showday:string;
 getday<T>(d:T):string{
  let day=Number(d);
  if (day>7 || day<=0){
    alert("wrong input - plz provide 1 to 7");
  }
    return this.showday=weekday[day];

}
show:boolean=false;
buttonName:any="Show account details";

toggle(){

 this.show=!this.show;

 if(this.show)
 {
   this.buttonName="Hide account details";
 }
 else{
   this.buttonName="Show account details";
 }
}

  animals:any=['Tiger','Elephant','Zebra']
imageurl:string;
getImg(filter:string){

  if (filter=="Tiger"){
this.imageurl="assets/Tiger.jpg";
  }else if (filter=="Elephant"){
    this.imageurl="assets/Elephant.jpg";
      } else if (filter=="Zebra"){
        this.imageurl="assets/Zebra.jpg";
          }

}

}
enum weekday{
  Monday=1,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
   Saturaday,
   Sunday
}