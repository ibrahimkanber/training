import {StyleSheet, Text} from 'react-native';
import {useMainContext} from '../../providers/MainProvider';
import {Box} from '../ui/Box';
import {Button} from '../ui/Button';
import React from 'react';
import {theme} from '../../theming';
export const ListItem = () => {
  const {lang, changeLang} = useMainContext();
  return (
    <Box style={styles.container}>
      <Button
        title="Language"
        onPress={changeLang}
        containerStyle={styles.button}
      />
      <Text>Active---{lang}</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spaces.m,
    borderRadius: theme.sizes.m,
    marginVertical: theme.sizes.s,
  },
  button: {
    paddingHorizontal: theme.spaces.m,
    paddingVertical: theme.spaces.xs,
  },
});
