import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class CardContent extends Component {
  render () {
    const newStyle = this.props.style || {};
    return (
      <View style={[styles.cardContent, newStyle]}>
        {this.props.avatarSource!==undefined &&
          <Image source={this.props.avatarSource} resizeMode="stretch" style={styles.avatarStyle} />
        }
        <View style={styles.CardContentTextCont}>
          {this.props.text !== undefined ? <Text style={this.props.isDark ? [styles.contentText, styles.lightText] : styles.contentText}>{this.props.text}</Text> : this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  darkText: {
    color: 'rgba(0 ,0 ,0 , 0.87)'
  },
  lightText: {
    color: 'rgba(255 ,255 ,255 , 0.87)'
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16
  },
  CardContentTextCont: {
    flex: 1,
    flexDirection: 'column'
  },
  contentText: {
    fontSize: 14,
    color: 'rgba(0 ,0 ,0 , 0.54)'
  },
  avatarStyle: {
    width: 40,
    height: 40,
    borderRadius: 150,
    marginRight: 16
  }
});