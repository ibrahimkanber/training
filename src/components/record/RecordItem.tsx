import {FlatList, StyleSheet, Text} from 'react-native';
import {Box} from '../ui/Box';
import React from 'react';
import {theme} from '../../theming';
import {Adress} from './models/Adress';
import {Company} from './models/Company';
import {useTranslations} from '../../hooks/useTranslations';
import {Fields} from './constants';
import {FormFieldValues} from './formReducer';
export const RecordItem = ({record}: {record: Adress | Company}) => {
  const [fieldTranslations] = useTranslations(['fieldNames']);
  const isCompany = record instanceof Company;
  const values = record.getValues() as FormFieldValues;
  const fieldArr = Object.keys(record.getValues()) as Fields[];
  const renderItem = ({item}: {item: Fields; index: number}) => {
    return (
      <Text>
        {fieldTranslations[item]} = {values[item]}
      </Text>
    );
  };
  return (
    <Box style={styles.container}>
      <FlatList
        data={fieldArr}
        renderItem={renderItem}
        keyExtractor={(_, idnex) => idnex.toString()}
        ListHeaderComponent={
          <Text style={styles.title}>
            Record Type: {isCompany ? 'Company' : 'Adress'}
          </Text>
        }
      />
      <Text style={styles.last}>To String----{record.toString()}</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: theme.spaces.m,
    borderRadius: theme.sizes.m,
  },
  title: {
    color: theme.primary,
    fontWeight: 'bold',
    marginBottom: theme.spaces.s,
  },
  last: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.small,
    marginTop: theme.spaces.s,
  },
});
