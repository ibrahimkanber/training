import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Routes, useMainContext} from '../../providers/MainProvider';
import {theme} from '../../theming';
import {Button} from '../ui/Button';

const Buttons = [
  {title: Routes.HOME, id: 1, route: Routes.HOME},
  {title: Routes.RECORDS, id: 2, route: Routes.RECORDS},
  {title: Routes.SETTINGS, id: 3, route: Routes.SETTINGS},
];
export const TabSwitch = () => {
  const {selectedTab, setSelectedTab} = useMainContext();
  const handleSwitch = (route: Routes) => {
    setSelectedTab?.(route);
  };

  return (
    <View style={styles.container}>
      {Buttons.map(button => (
        <Button
          key={button.id}
          title={button.title}
          onPress={() => handleSwitch(button.route)}
          containerStyle={styles.button}
          outline={selectedTab !== button.route}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spaces.xs,
    paddingTop: theme.spaces.xxl,
  },
  title: {
    color: theme.colorOnPrimary,
  },
  button: {
    marginHorizontal: theme.spaces.xs,
    paddingHorizontal: theme.spaces.l,
  },
});
