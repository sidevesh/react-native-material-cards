import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class CardTitle extends Component {
  render () {
    const newStyle = this.props.style || {};
    const newTitleStyle = this.props.titleStyle || {};
    const newSubtitleStyle = this.props.subtitleStyle || {};
    const newAvatarStyle = this.props.avatarStyle || {};
    let titleStyle = [styles.titleText, newTitleStyle];
    let subtitleStyle = [styles.subtitleText, newSubtitleStyle];
    if (this.props.title !== undefined && this.props.subtitle !== undefined && this.props.avatarSource === undefined) {
      if (this.props.subtitleAbove) {
        subtitleStyle = [...subtitleStyle, { marginBottom: 12 }];
      }
      else {
        titleStyle = [...titleStyle, { marginBottom: 12 }];
      }
    }
    if (this.props.isDark) {
      subtitleStyle = [...subtitleStyle, styles.lightText];
      titleStyle = [...titleStyle, styles.lightText];
    }
    else {
      titleStyle = [...titleStyle, styles.darkText];
    }
    if (!this.props.subtitleAbove) {
      return (
        <View style={[styles.cardTitle, newStyle]}>
          {this.props.avatarSource !== undefined && (
            <Image
              source={this.props.avatarSource}
              resizeMode="stretch"
              style={[styles.avatarStyle, newAvatarStyle]}
            />
          )}
          <View style={styles.cardTitleTextContainer}>
            {this.props.title !== undefined && (
              <Text
                style={this.props.avatarSource === undefined
                  ? titleStyle
                  : [titleStyle, { fontSize: 14 }]
                }
              >
                {this.props.title}
              </Text>
            )}
            {this.props.subtitle !== undefined && (
              <Text style={subtitleStyle}>
                {this.props.subtitle}
              </Text>
            )}
          </View>
        </View>
      );
    }
    else {
      return (
        <View style={[styles.cardTitle, newStyle]}>
          {this.props.avatarSource !== undefined && (
            <Image
              source={this.props.avatarSource}
              resizeMode="stretch"
              style={[styles.avatarStyle, newAvatarStyle]}
            />
          )}
          <View style={styles.cardTitleTextContainer}>
            {this.props.subtitle !== undefined && (
              <Text style={subtitleStyle}>
                {this.props.subtitle}
              </Text>
            )}
            {this.props.title !== undefined && (
              <Text
                style={this.props.avatarSource === undefined
                  ? titleStyle
                  : [titleStyle, { fontSize: 14 }]
                }
              >
                {this.props.title}
              </Text>
            )}
          </View>
        </View>
      );
    }
  }
}

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
    fontSize:14,
    color: 'rgba(0 ,0 ,0 , 0.38)',
  },
  avatarStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  }
});
