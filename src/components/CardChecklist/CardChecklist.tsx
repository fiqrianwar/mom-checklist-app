import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/assets';
import styles from './styles/index';
import { ProgressBar } from '../ProgressBar';
import { CardChecklistProps } from './types';

const CardChecklist: React.FC<CardChecklistProps> = ({
  onPress,
  onDelete,
  onHide,
  onEdit,
  progress,
  title,
}) => {
  const [openCTA, setOpenCTA] = useState(false);

  const handleOpenCTA = () => setOpenCTA(!openCTA);

  const cardCTA = [
    { icon: icons.deleteTrash, text: 'Delete', onPress: onDelete },
    { icon: icons.visibility, text: 'Hide', onPress: onHide },
    { icon: icons.edit, text: 'Edit', onPress: onEdit },
  ];

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.card, openCTA ? styles.cardOpen : styles.cardClosed]}>
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Pressable onPress={handleOpenCTA}>
              <Image source={icons.more} />
            </Pressable>
          </View>
          <ProgressBar progress={progress as number} />
        </View>
      </View>

      {openCTA && (
        <View style={styles.ctaContainer}>
          {cardCTA.map(({ text, icon, onPress }, i) => (
            <Pressable key={i} onPress={onPress}>
              <View style={styles.ctaItem}>
                <Image source={icon} />
                <Text style={styles.ctaText}>{text}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      )}
    </Pressable>
  );
};

export default CardChecklist;
