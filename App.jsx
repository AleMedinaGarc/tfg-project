import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ChangeProvider } from './components/context/ChangeProvider';
import TabNav from './components/TabNav';

export default function App() {
  return (
    <NavigationContainer>
      <ChangeProvider>
        <TabNav />
      </ChangeProvider>
    </NavigationContainer>
  );
}
