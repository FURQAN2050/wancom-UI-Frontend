/* tslint:disable */
import {
  Package
} from '../index';

declare var Object: any;
export interface SubDealerPackageInterface {
  "price"?: string;
  "quantity"?: number;
  "id"?: number;
  "packageId"?: number;
  "subDealerId"?: number;
  package?: Package;
}

export class SubDealerPackage implements SubDealerPackageInterface {
  "price": string;
  "quantity": number;
  "id": number;
  "packageId": number;
  "subDealerId": number;
  package: Package;
  constructor(data?: SubDealerPackageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SubDealerPackage`.
   */
  public static getModelName() {
    return "SubDealerPackage";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SubDealerPackage for dynamic purposes.
  **/
  public static factory(data: SubDealerPackageInterface): SubDealerPackage{
    return new SubDealerPackage(data);
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
      name: 'SubDealerPackage',
      plural: 'SubDealerPackages',
      path: 'SubDealerPackages',
      idName: 'id',
      properties: {
        "price": {
          name: 'price',
          type: 'string'
        },
        "quantity": {
          name: 'quantity',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "packageId": {
          name: 'packageId',
          type: 'number'
        },
        "subDealerId": {
          name: 'subDealerId',
          type: 'number'
        },
      },
      relations: {
        package: {
          name: 'package',
          type: 'Package',
          model: 'Package',
          relationType: 'belongsTo',
                  keyFrom: 'packageId',
          keyTo: 'id'
        },
      }
    }
  }
}
