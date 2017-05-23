import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // fname : string = 'TEWAPONG'
  // lname : string = 'WONGKHUENKAEW'
  fname : string
  lname : string

  arr_num : Array<number> = [1,2,3,4,5] //`array variablee
  color : Array<{id:number,name:string}> = [
    {id : 1 , name : 'red'},
    {id : 2 , name : 'green'},
    {id : 3 , name  : 'blue'}
  ]

  constructor(public navCtrl: NavController) {
    console.log(this.color[1].name)
  }

  test(){
    alert('Hello, '+this.fname+' '+this.lname)
    console.log('TEST Console.log')
    console.log(this.arr_num)
    console.log(this.color[1].name)

    this.color.forEach(v => {
      console.log(v.id+' : '+v.name);
    });

  }

}
