import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { Image, ImageSourcePropType, Pressable, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import styles from './styles';

type Props = MaterialTopTabBarProps;

const TabBar = ({ state, descriptors, navigation }: Props) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const isFirst = index === 0;
        const isLast = index === state.routes.length - 1;
        const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tab,
              focused && styles.tabFocused,
              isFirst && styles.firstTab,
              isLast && styles.lastTab,
            ]}
          >
            <Image source={options.tabBarIcon as ImageSourcePropType} />
            <Text style={[styles.label, focused ? styles.labelFocused : styles.labelInactive]}>
              {options.title ?? route.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;
