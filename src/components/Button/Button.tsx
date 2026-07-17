import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import styles from './styles';
import { ButtonProps } from './types';

const Button = ({ title, variant, icon, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles[variant]} onPress={onPress}>
      {variant === 'primary' ? (
        <>
          <Text style={styles.textPrimary}>{title}</Text>
          {icon && <Image source={icon} />}
        </>
      ) : (
        <>
          {icon && <Image source={icon} />}
          <Text
            style={
              variant === 'secondary'
                ? styles.textSecondary
                : variant === 'formPrimary'
                  ? styles.textFormPrimary
                  : styles.textFormSecondary
            }
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
