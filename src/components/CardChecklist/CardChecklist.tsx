import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/assets';
import styles from './styles/index';
import { ProgressBar } from '../ProgressBar';

const CardChecklist = () => {
  const [openCTA, setOpenCTA] = useState(false);

  const handleOpenCTA = () => setOpenCTA(!openCTA);

  const cardCTA = [
    { icon: icons.deleteTrash, text: 'Delete', onPress: () => {} },
    { icon: icons.visibility, text: 'Hide', onPress: () => {} },
    { icon: icons.edit, text: 'Edit', onPress: () => {} },
  ];

  return (
    <Pressable onPress={() => alert('jas')}>
      <View style={[styles.card, openCTA ? styles.cardOpen : styles.cardClosed]}>
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Pregnancy (0/5)</Text>
            <Pressable onPress={handleOpenCTA}>
              <Image source={icons.more} />
            </Pressable>
          </View>
          <ProgressBar progress={0.5} />
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
