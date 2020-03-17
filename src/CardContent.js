import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const CardContent = (props) => {
  const newStyle = props.style || {};
  const newAvatarStyle = props.avatarStyle || {};
  const newTextStyle = props.textStyle || {};
  return (
    <View style={[styles.cardContent, newStyle]}>
      {props.avatarSource !== undefined && (
        <Image
          source={props.avatarSource}
          resizeMode="stretch"
          style={[styles.avatarStyle, newAvatarStyle]}
        />
      )}
      <View style={styles.cardContentTextContainer}>
        {props.text !== undefined
          ? (
            <Text
              style={
                props.isDark
                  ? [styles.contentText, newTextStyle, styles.lightText]
                  : [styles.contentText, newTextStyle]
              }
            >
              {props.text}
            </Text>
          )
          : props.children
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  darkText: {
    color: 'rgba(0 ,0 ,0 , 0.87)',
  },
  lightText: {
    color: 'rgba(255 ,255 ,255 , 0.87)',
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
  },
  cardContentTextContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  contentText: {
    fontSize: 14,
    color: 'rgba(0 ,0 ,0 , 0.54)',
  },
  avatarStyle: {
    width: 40,
    height: 40,
    borderRadius: 150,
    marginRight: 16,
  },
});

export default CardContent;
