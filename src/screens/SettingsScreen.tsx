import React from 'react';
import {StyleSheet} from 'react-native';
import {ListItem} from '../components/settings/SettingsListItem';
import {Box} from '../components/ui/Box';
import {useMainContext} from '../providers/MainProvider';
import {theme} from '../theming';
import {ScreenLayout} from './ScreenLayout';

export const SettingsScreen = () => {
  const {lang, changeLang, enableRealtimeValidation, setRealtimeValidation} =
    useMainContext();
  const toggle = () => {
    setRealtimeValidation?.(prev => !prev);
  };
  return (
    <ScreenLayout>
      <Box style={styles.container}>
        <ListItem
          buttonTitle="Language"
          onButtonPress={changeLang}
          rightElementTitle={lang}
        />
      </Box>
      <Box style={styles.container}>
        <ListItem
          buttonTitle="Realtime Validation"
          onButtonPress={toggle}
          rightElementTitle={enableRealtimeValidation ? 'enabled' : 'disbled'}
        />
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
