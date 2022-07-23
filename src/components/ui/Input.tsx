import React, {useState} from 'react';
import {TextInput, View, TextInputProps, StyleSheet, Text} from 'react-native';
import {theme} from '../../theming';

interface InputProps extends TextInputProps {
  errorMessage?: string | boolean;
  label?: string;
}

export const Input = ({errorMessage, label, ...props}: InputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...props}
        style={[styles.input, focused && styles.focusExtra]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <Text style={styles.error}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: theme.spaces.xs,
    marginBottom: 10,
    flex: 1,
  },
  label: {
    fontSize: theme.fontSizes.small,
    flex: 1,
    color: theme.primary,
    marginBottom: theme.spaces.xs,
    marginLeft: 2,
  },
  input: {
    paddingLeft: theme.spaces.s,
    borderWidth: 1,
    fontSize: theme.fontSizes.medium,
    borderColor: theme.softDark,
    borderRadius: theme.sizes.s,
  },
  error: {
    fontSize: theme.fontSizes.small,
    color: theme.error,
  },
  focusExtra: {
    borderColor: theme.dark,
  },
});
