import {Fields} from '../components/record/constants';
import {FormFieldValues} from '../components/record/formReducer';

export enum ValidationMethodeMapping {
  firstName = 'validateFirstName',
  streetName = 'validateStreetName',
  streetNumber = 'validateStreetNumber',
  zipCode = 'validateZipCode',
  town = 'validateTown',
  phoneNumber = 'validatePhoneNumber',
  companyName = 'validateCompanyName',
}

class ValidationManager {
  private static minOneLetterPatter = /[a-zA-Z]+/;
  private static firstNamePattern = /^[a-zA-Z]*$/;
  private static streetNamePattern = /^[a-zA-Z"-+.,:;/]*$/;
  private static streetNumberPattern = /^[a-zA-Z0-9]*$/;
  private static zipCodePattern = /^[0-9]{4,5}$/;
  private static townPattern = /^[a-zA-Z.,:;/"]*$/;
  private static phoneNumberPattern = /^[0-9"+/-]{0,20}$/;
  private static companyNamePattern = /^[a-zA-Z.,:;/"]*$/;

  validateFirstName(firstName: string) {
    return !!firstName && !!firstName.match(ValidationManager.firstNamePattern);
  }
  validateStreetName(streetName: string) {
    const firsStep = !!streetName.match(ValidationManager.minOneLetterPatter);
    const secondStep = !!streetName.match(ValidationManager.streetNamePattern);
    return firsStep && secondStep;
  }
  validateStreetNumber(streetNumber: string) {
    const result = streetNumber.match(ValidationManager.streetNumberPattern);
    return !!streetNumber && !!result;
  }
  validateZipCode(zipCode: string) {
    const result = zipCode.match(ValidationManager.zipCodePattern);
    return !!result;
  }
  validateTown(town: string) {
    const result = town.match(ValidationManager.townPattern);
    return !!town && !!result;
  }
  validatePhoneNumber(phoneNumber: string) {
    const result = phoneNumber.match(ValidationManager.phoneNumberPattern);
    return phoneNumber && !!result;
  }
  validateCompanyName(companyName: string) {
    if (!companyName) {
      return true;
    }
    const result = companyName.match(ValidationManager.companyNamePattern);
    return !!result;
  }

  runAllValidations(values: FormFieldValues) {
    const errors: string[] = [];
    const fieldArr = Object.keys(values) as Fields[];
    fieldArr.map(field => {
      const validationMethode = ValidationMethodeMapping[field];
      const isValid = this[validationMethode](values[field]);
      if (!isValid) {
        errors.push(field);
      }
      return isValid;
    });

    return {errors};
  }
}

export const validationManager = new ValidationManager();
