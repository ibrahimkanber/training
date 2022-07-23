import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {theme} from '../theming';

export const ScreenLayout = ({
  children,
  trim,
}: {
  children: React.ReactNode;
  trim?: boolean;
}) => {
  return (
    <View style={[styles.container, trim && styles.trim]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: theme.background,
    paddingHorizontal: theme.spaces.l,
  },
  trim: {
    paddingHorizontal: 0,
    margin: 0,
  },
});
