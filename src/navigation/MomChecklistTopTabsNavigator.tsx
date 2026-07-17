import { icons } from '@/assets';
import { TabBar } from '@/components';
import { ChecklistLilOnesScreen, ChecklistNewMomsScreen } from '@/screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';

const Tab = createMaterialTopTabNavigator();

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
        component={ChecklistNewMomsScreen}
        options={{
          title: 'New Moms',
          tabBarIcon: icons.momOval,
        }}
      />
      <Tab.Screen
        name="LilOnes"
        component={ChecklistLilOnesScreen}
        options={{
          title: `Lil' Ones`,
          tabBarIcon: icons.momBaby,
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabsMomChecklist;
