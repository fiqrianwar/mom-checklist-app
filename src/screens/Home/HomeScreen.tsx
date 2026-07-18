import { AppScreen } from '@/components';
import React from 'react';
import { HomeBottomSheet } from './components';

const Home = () => {
  return (
    <AppScreen scrollable>
      <HomeBottomSheet />
    </AppScreen>
  );
};

export default Home;
