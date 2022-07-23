import {FormFieldValues} from '../formReducer';
import {Adress} from './Adress';
import {Company} from './Company';

export const createObject = (values: FormFieldValues): Company | Adress => {
  const {
    firstName,
    streetName,
    streetNumber,
    town,
    zipCode,
    companyName,
    phoneNumber,
  } = values;
  return values.companyName
    ? new Company(
        firstName,
        streetName,
        streetNumber,
        zipCode,
        town,
        phoneNumber,
        companyName,
      )
    : new Adress(
        firstName,
        streetName,
        streetNumber,
        zipCode,
        town,
        phoneNumber,
      );
};
