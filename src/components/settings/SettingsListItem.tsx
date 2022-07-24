import {StyleSheet, Text} from 'react-native';
import {Box} from '../ui/Box';
import {Button} from '../ui/Button';
import React from 'react';
import {theme} from '../../theming';

interface IListItem {
  onButtonPress?: () => void;
  buttonTitle: string;
  rightElementTitle?: string;
}
export const ListItem = ({
  onButtonPress,
  buttonTitle,
  rightElementTitle,
}: IListItem) => {
  return (
    <>
      <Box style={styles.container}>
        <Button
          title={buttonTitle}
          onPress={onButtonPress}
          containerStyle={styles.button}
        />
        <Text style={styles.rightTitle}>{rightElementTitle}</Text>
      </Box>
    </>
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
  rightTitle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
