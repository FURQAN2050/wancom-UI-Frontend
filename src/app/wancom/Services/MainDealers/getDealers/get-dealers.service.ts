import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MainDealerApi } from 'src/app/shared/sdk';
@Injectable({
  providedIn: 'root'
})
export class GetDealersService {
  private mainDealersSubject = new BehaviorSubject([]);
  constructor(private DealerApi:MainDealerApi) { }

  public setAllDealers(){
    this.DealerApi.find({
      include:[
        'subDealers'
      ]
    }).subscribe(res=>{
      res=res.reverse();
      this.mainDealersSubject.next(res);
      console.log("su set Succesfully",res);
    },er=>{
      console.log("error occured while getting  all packages",er)
    })
  }

  public getAllDealersObervable(){
    return this.mainDealersSubject.asObservable()
  }
}
