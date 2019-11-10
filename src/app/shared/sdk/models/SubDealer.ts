/* tslint:disable */
import {
  SubDealerPackage
} from '../index';

declare var Object: any;
export interface SubDealerInterface {
  "name"?: string;
  "phoneNumber"?: string;
  "id"?: number;
  "mainDealerId"?: number;
  subDealerPackages?: SubDealerPackage[];
}

export class SubDealer implements SubDealerInterface {
  "name": string;
  "phoneNumber": string;
  "id": number;
  "mainDealerId": number;
  subDealerPackages: SubDealerPackage[];
  constructor(data?: SubDealerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SubDealer`.
   */
  public static getModelName() {
    return "SubDealer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SubDealer for dynamic purposes.
  **/
  public static factory(data: SubDealerInterface): SubDealer{
    return new SubDealer(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'SubDealer',
      plural: 'SubDealers',
      path: 'SubDealers',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "phoneNumber": {
          name: 'phoneNumber',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "mainDealerId": {
          name: 'mainDealerId',
          type: 'number'
        },
      },
      relations: {
        subDealerPackages: {
          name: 'subDealerPackages',
          type: 'SubDealerPackage[]',
          model: 'SubDealerPackage',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'subDealerId'
        },
      }
    }
  }
}
