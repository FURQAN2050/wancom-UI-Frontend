/* tslint:disable */

declare var Object: any;
export interface PackageInterface {
  "name"?: string;
  "defaultPrice"?: string;
  "code"?: string;
  "id"?: number;
}

export class Package implements PackageInterface {
  "name": string;
  "defaultPrice": string;
  "code": string;
  "id": number;
  constructor(data?: PackageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Package`.
   */
  public static getModelName() {
    return "Package";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Package for dynamic purposes.
  **/
  public static factory(data: PackageInterface): Package{
    return new Package(data);
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
      name: 'Package',
      plural: 'Packages',
      path: 'Packages',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "defaultPrice": {
          name: 'defaultPrice',
          type: 'string'
        },
        "code": {
          name: 'code',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
