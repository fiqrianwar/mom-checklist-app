import { icons } from '@/assets';
import { TabBar } from '@/components';
import { LilOnesScreen, NewMomsScreen } from '@/screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { TopTabParamList } from './types';

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

const TopTabsMomChecklist = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        sceneStyle: {
          backgroundColor: '#D4B1EF',
        },
      }}
    >
      <Tab.Screen
        name="NewMoms"
        component={NewMomsScreen}
        options={{
          title: 'New Moms',
          tabBarIcon: icons.momOval,
        }}
      />
      <Tab.Screen
        name="LilOnes"
        component={LilOnesScreen}
        options={{
          title: `Lil' Ones`,
          tabBarIcon: icons.momBaby,
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabsMomChecklist;
