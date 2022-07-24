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
  outline?: boolean;
}

export const Button = ({
  title,
  outline,
  containerStyle,
  ...props
}: ButtonProps) => {
  return (
    <View>
      <Pressable
        {...props}
        style={[
          styles.container,
          outline && styles.outlineContainer,
          containerStyle,
        ]}>
        <Text style={[styles.title, outline && styles.outlineTitle]}>
          {title}
        </Text>
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
    borderWidth: 2,
    borderColor: theme.primary,
    borderRadius: 15,
  },
  title: {
    color: theme.colorOnPrimary,
  },
  outlineTitle: {
    color: theme.primary,
  },
  outlineContainer: {
    backgroundColor: theme.colorOnPrimary,
  },
});
