/* tslint:disable */
import {
  SubDealer
} from '../index';

declare var Object: any;
export interface MainDealerInterface {
  "name"?: string;
  "phoneNumber"?: string;
  "id"?: number;
  subDealers?: SubDealer[];
}

export class MainDealer implements MainDealerInterface {
  "name": string;
  "phoneNumber": string;
  "id": number;
  subDealers: SubDealer[];
  constructor(data?: MainDealerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MainDealer`.
   */
  public static getModelName() {
    return "MainDealer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MainDealer for dynamic purposes.
  **/
  public static factory(data: MainDealerInterface): MainDealer{
    return new MainDealer(data);
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
      name: 'MainDealer',
      plural: 'MainDealers',
      path: 'MainDealers',
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
      },
      relations: {
        subDealers: {
          name: 'subDealers',
          type: 'SubDealer[]',
          model: 'SubDealer',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'mainDealerId'
        },
      }
    }
  }
}
