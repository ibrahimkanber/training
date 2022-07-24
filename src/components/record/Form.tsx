import React, {useReducer} from 'react';
import {FlatList, KeyboardAvoidingView, StyleSheet, Text} from 'react-native';
import {useAlert} from '../../hooks/useAlert';
import {useTranslations} from '../../hooks/useTranslations';
import {useMainContext} from '../../providers/MainProvider';
import {theme} from '../../theming';
import {
  validationManager,
  ValidationMethodeMapping,
} from '../../utils/ValidationManager';
import {Input, Button} from '../ui';

import {entryList, Fields} from './constants';
import {formActions, formReducer, initial} from './formReducer';
import {Adress} from './models/Adress';
import {createObject} from './models/factory';

const FormHeader = () => {
  return <Text style={styles.header}>REGISTER FORM</Text>;
};

export const Form = () => {
  const {showAlert} = useAlert();
  const {recordList, setRecordList, enableRealtimeValidation} =
    useMainContext();
  const [state, dispatch] = useReducer(formReducer, initial);
  const [errors, fields] = useTranslations(['error', 'fieldNames']);
  const handleChange = (selectedField: Fields) => (val: string) => {
    dispatch(formActions.setFieldValue(selectedField, val));
    if (!enableRealtimeValidation) {
      return;
    }
    const methodName = ValidationMethodeMapping[selectedField];
    const result = validationManager[methodName](val);
    const isSettedBeforeAsError = state.errorCodes.includes(selectedField);

    if (result) {
      isSettedBeforeAsError &&
        dispatch(
          formActions.setErrorCodes(
            state.errorCodes.filter(el => el !== selectedField),
          ),
        );

      return;
    }
    if (isSettedBeforeAsError) {
      return;
    }
    dispatch(formActions.setErrorCodes([...state.errorCodes, selectedField]));
    return;
  };
  const handleSubmit = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {errorCodes, ...values} = state;
    const errorCodesAfterValidation =
      validationManager.runAllValidations(values).errors;
    dispatch(formActions.setErrorCodes(errorCodesAfterValidation));
    if (!errorCodesAfterValidation.length) {
      const instance = createObject(values);
      saveToList(instance);
    }
  };
  const saveToList = (obj: Adress) => {
    const isDublicated = !!recordList?.find(el => el.isEqual(obj));
    if (isDublicated) {
      showAlert('Record result', 'Fail--Record Dublicate');
      return;
    }
    setRecordList?.(prev => [obj, ...prev]);
    showAlert('Record result', 'Success');
    dispatch(formActions.resetAll());
  };
  const getErrorMessage = (item: Fields): string => {
    return errors[item];
  };

  const renderItem = ({item}: {item: Fields}) => {
    return (
      <Input
        errorMessage={state.errorCodes.includes(item) && getErrorMessage(item)}
        onChangeText={handleChange(item)}
        value={state[item]}
        label={fields[item]}
      />
    );
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.keybaordAvoidingView}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        keyboardShouldPersistTaps="always"
        data={entryList}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
        ListHeaderComponent={<FormHeader />}
        ListFooterComponent={() => (
          <Button onPress={handleSubmit} title="Send" />
        )}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: theme.spaces.m,
    backgroundColor: theme.white,
    marginTop: theme.spaces.s,
    borderRadius: theme.sizes.m,
  },
  header: {
    textAlign: 'center',
    marginBottom: theme.spaces.xs,
    fontWeight: 'bold',
  },
  keybaordAvoidingView: {
    flex: 1,
  },
});
