import React from 'react';

import {TabSwitch} from './src/components/tab_switch/TabSwitch';
import {
  MainProvider,
  Routes,
  useMainContext,
} from './src/providers/MainProvider';
import {HomeScreen, RecordsScreen} from './src/screens';
import {ScreenLayout} from './src/screens/ScreenLayout';
import {SettingsScreen} from './src/screens/SettingsScreen';

const screenMapping = {
  [Routes.HOME]: <HomeScreen />,
  [Routes.RECORDS]: <RecordsScreen />,
  [Routes.SETTINGS]: <SettingsScreen />,
};

const App = () => {
  const {selectedTab} = useMainContext();
  return (
    <ScreenLayout trim>
      <TabSwitch />
      {screenMapping[selectedTab]}
    </ScreenLayout>
  );
};

export default () => (
  <MainProvider>
    <App />
  </MainProvider>
);
