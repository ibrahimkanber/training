import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {theme} from '../../theming';

interface IBox {
  children: React.ReactNode;
  style?: ViewStyle;
}
export const Box = ({children, style}: IBox) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.white,
  },
});
