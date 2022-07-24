import {Fields} from './constants';

export interface Action {
  type: Fields | 'errorCodes' | 'reset';
  payload?: any;
}

export const initial: FormState = {
  [Fields.FIRST_NAME]: '',
  [Fields.LAST_NAME]: '',
  [Fields.STREET_NAME]: '',
  [Fields.STREET_NUMBER]: '',
  [Fields.ZIP_CODE]: '',
  [Fields.TOWN]: '',
  [Fields.PHONE_NUMBER]: '',
  [Fields.COMPANY_NAME]: '',
  errorCodes: [],
};

export type FormFieldValues = {[property in Fields]: string};
export type FormState = FormFieldValues & {
  errorCodes: Fields[];
};

export const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case Fields.FIRST_NAME:
      return {...state, firstName: action.payload};
    case Fields.LAST_NAME:
      return {...state, lastName: action.payload};
    case Fields.STREET_NAME:
      return {...state, streetName: action.payload};
    case Fields.STREET_NUMBER:
      return {...state, streetNumber: action.payload};
    case Fields.ZIP_CODE:
      return {...state, zipCode: action.payload};
    case Fields.TOWN:
      return {...state, town: action.payload};
    case Fields.PHONE_NUMBER:
      return {...state, phoneNumber: action.payload};
    case Fields.COMPANY_NAME:
      return {...state, companyName: action.payload};
    case 'errorCodes':
      return {...state, errorCodes: action.payload};
    case 'reset':
      return initial;
    default:
      break;
  }

  return state;
};

export const formActions = {
  setFieldValue(actionType: Fields, payload?: any) {
    return {
      type: actionType,
      payload,
    };
  },
  setErrorCodes(payload?: any) {
    return {
      type: 'errorCodes' as const,
      payload,
    };
  },
  resetAll() {
    return {
      type: 'reset' as const,
    };
  },
};
