import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const CardTitle = (props) => {
  const newStyle = props.style || {};
  const newTitleStyle = props.titleStyle || {};
  const newSubtitleStyle = props.subtitleStyle || {};
  const newAvatarStyle = props.avatarStyle || {};
  let titleStyle = [styles.titleText, newTitleStyle];
  let subtitleStyle = [styles.subtitleText, newSubtitleStyle];
  // eslint-disable-next-line max-len
  if (props.title !== undefined && props.subtitle !== undefined && props.avatarSource === undefined) {
    if (props.subtitleAbove) {
      subtitleStyle = [...subtitleStyle, { marginBottom: 12 }];
    } else {
      titleStyle = [...titleStyle, { marginBottom: 12 }];
    }
  }
  if (props.isDark) {
    subtitleStyle = [...subtitleStyle, styles.lightText];
    titleStyle = [...titleStyle, styles.lightText];
  } else {
    titleStyle = [...titleStyle, styles.darkText];
  }
  if (!props.subtitleAbove) {
    return (
      <View style={[styles.cardTitle, newStyle]}>
        {props.avatarSource !== undefined && (
        <Image
          source={props.avatarSource}
          resizeMode="stretch"
          style={[styles.avatarStyle, newAvatarStyle]}
        />
        )}
        <View style={styles.cardTitleTextContainer}>
          {props.title !== undefined && (
          <Text
            style={props.avatarSource === undefined
              ? titleStyle
              : [titleStyle, { fontSize: 14 }]
                }
          >
            {props.title}
          </Text>
          )}
          {props.subtitle !== undefined && (
          <Text style={subtitleStyle}>
            {props.subtitle}
          </Text>
          )}
        </View>
      </View>
    );
  }
  return (
    <View style={[styles.cardTitle, newStyle]}>
      {props.avatarSource !== undefined && (
        <Image
          source={props.avatarSource}
          resizeMode="stretch"
          style={[styles.avatarStyle, newAvatarStyle]}
        />
      )}
      <View style={styles.cardTitleTextContainer}>
        {props.subtitle !== undefined && (
          <Text style={subtitleStyle}>
            {props.subtitle}
          </Text>
        )}
        {props.title !== undefined && (
          <Text
            style={props.avatarSource === undefined
              ? titleStyle
              : [titleStyle, { fontSize: 14 }]
                }
          >
            {props.title}
          </Text>
        )}
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
  cardTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
  },
  cardTitleTextContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  titleText: {
    fontSize: 24,
  },
  subtitleText: {
    fontSize: 14,
    color: 'rgba(0 ,0 ,0 , 0.38)',
  },
  avatarStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
});

export default CardTitle;
