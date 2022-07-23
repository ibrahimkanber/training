import React from 'react';
import {StyleSheet} from 'react-native';
import {ListItem} from '../components/settings/SettingsListItem';
import {Box} from '../components/ui/Box';
import {theme} from '../theming';
import {ScreenLayout} from './ScreenLayout';

export const SettingsScreen = () => {
  return (
    <ScreenLayout>
      <Box style={styles.container}>
        <ListItem />
      </Box>
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
