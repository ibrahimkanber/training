import {Fields} from '../constants';

export class Adress {
  constructor(
    private firstName: string,
    private lastName: string,
    private streetName: string,
    private streetNumber: string,
    private zipCode: string,
    private town: string,
    private phoneNumber: string,
  ) {}

  toString() {
    //console.log(`${this.firstName}-${this.streetName}`);
    return `${this.firstName}-${this.lastName}-${this.streetName}-${this.streetNumber}-${this.zipCode}-${this.town}-${this.phoneNumber}`;
  }

  isEqual(obj: Adress) {
    //console.log(this.toString() === obj.toString());
    return this.toString() === obj.toString();
  }
  getValues() {
    return {
      [Fields.FIRST_NAME]: this.firstName,
      [Fields.LAST_NAME]: this.lastName,
      [Fields.STREET_NAME]: this.streetName,
      [Fields.STREET_NUMBER]: this.streetNumber,
      [Fields.ZIP_CODE]: this.zipCode,
      [Fields.TOWN]: this.town,
      [Fields.PHONE_NUMBER]: this.phoneNumber,
    };
  }
  getLastName() {
    return this.lastName;
  }
}
