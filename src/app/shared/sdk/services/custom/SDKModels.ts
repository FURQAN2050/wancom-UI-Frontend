/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Package } from '../../models/Package';
import { MainDealer } from '../../models/MainDealer';
import { SubDealer } from '../../models/SubDealer';
import { SubDealerPackage } from '../../models/SubDealerPackage';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Package: Package,
    MainDealer: MainDealer,
    SubDealer: SubDealer,
    SubDealerPackage: SubDealerPackage,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
