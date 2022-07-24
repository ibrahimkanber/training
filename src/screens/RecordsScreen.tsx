import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Adress} from '../components/record/models/Adress';
import {RecordItem} from '../components/record/RecordItem';

import {Box} from '../components/ui/Box';
import {useMainContext} from '../providers/MainProvider';
import {theme} from '../theming';
import {ScreenLayout} from './ScreenLayout';

export const RecordsScreen = () => {
  const {recordList} = useMainContext();
  const sortedRecordList = recordList?.sort((a, b) =>
    a.getLastName().localeCompare(b.getLastName()),
  );
  const renderItem = ({item}: {item: Adress}) => {
    return (
      <Box style={styles.container}>
        <RecordItem record={item} />
      </Box>
    );
  };
  return (
    <ScreenLayout>
      <FlatList
        data={sortedRecordList!}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.sizes.m,
    marginTop: theme.spaces.s,
    paddingVertical: theme.spaces.m,
  },
});
