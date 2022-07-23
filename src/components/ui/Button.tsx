import React from 'react';
import {
  View,
  Pressable,
  PressableProps,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {theme} from '../../theming';

interface ButtonProps extends PressableProps {
  title: string;
  containerStyle?: ViewStyle;
  onPress: () => void;
}

export const Button = ({title, containerStyle, ...props}: ButtonProps) => {
  return (
    <View>
      <Pressable {...props} style={[styles.container, containerStyle]}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: theme.primary,
    paddingHorizontal: theme.spaces.xxl,
    paddingVertical: theme.spaces.s,

    borderRadius: 15,
  },
  title: {
    color: theme.colorOnPrimary,
  },
});
