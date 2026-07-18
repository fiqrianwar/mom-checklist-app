import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, ImageSourcePropType, View } from 'react-native';
import styles from './styles';
import { ButtonProps } from './types';

const Button = ({ title, variant, icon, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles[variant]} onPress={onPress}>
      {variant === 'linkText' ? (
        <>
          {icon && <Image source={icon} />}
          <Text style={styles.textLinkText}>{title}</Text>
        </>
      ) : variant === 'disabled' ? (
        <>
          {icon && <Image source={icon} />}
          <Text style={styles.textDisabled}>{title}</Text>
        </>
      ) : variant === 'primary' ? (
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
