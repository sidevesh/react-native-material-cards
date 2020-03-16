import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class CardContent extends Component {
  render () {
    const newStyle = this.props.style || {};
    const newAvatarStyle = this.props.avatarStyle || {};
    const newTextStyle = this.props.textStyle || {};
    return (
      <View style={[styles.cardContent, newStyle]}>
        {this.props.avatarSource !== undefined && (
          <Image
            source={this.props.avatarSource}
            resizeMode="stretch"
            style={[styles.avatarStyle, newAvatarStyle]}
          />
        )}
        <View style={styles.cardContentTextContainer}>
          {this.props.text !== undefined
            ? (
              <Text
                style={
                  this.props.isDark
                    ? [styles.contentText, newTextStyle, styles.lightText]
                    : [styles.contentText, newTextStyle]
                }
              >
                {this.props.text}
              </Text>
            )
            : this.props.children
          }
        </View>
      </View>
    );
  }
}

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
  }
});
