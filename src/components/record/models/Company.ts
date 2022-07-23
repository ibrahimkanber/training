import {Fields} from '../constants';
import {Adress} from './Adress';

export class Company extends Adress {
  constructor(
    firstName: string,
    streetName: string,
    streetNumber: string,
    zipCode: string,
    town: string,
    phoneNumber: string,
    private companyName: string,
  ) {
    super(firstName, streetName, streetNumber, zipCode, town, phoneNumber);
  }

  toString(): string {
    const base = super.toString();
    //console.log(`${base}-${this.companyName}`);
    return `${base}-${this.companyName}`;
  }

  getValues() {
    const adressdata = super.getValues();
    return {...adressdata, [Fields.COMPANY_NAME]: this.companyName};
  }
}
