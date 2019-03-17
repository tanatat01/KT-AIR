import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ToursProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomersProvider {
  data : any;
  constructor(public http: HttpClient) {
   // console.log('Hello ToursProvider Provider');
   this.data = [
     {id: "1",name: "theiy", tel: "0844484568", address: "55/5 m.5 Phra Pron, Mueang, Nakhon Pathom"},
     {id: "2",name: "mos", tel: "0874451023", address: "66/6 m.5 Phra Pron, Mueang, Nakhon Pathom"},
     {id: "3",name: "tao", tel: "0875568794", address: "77/7 m.5 Phra Pron, Mueang, Nakhon Pathom"}
   ];
  }
  loadAll(){
      return Promise.resolve(this.data);
  }

  getCustomerById(id){
    for(var i = 0;i <(this.data).length;i++){
      if(this.data[i].id==id){
        return Promise.resolve(this.data[i])
      }
    }
  }
  
}
