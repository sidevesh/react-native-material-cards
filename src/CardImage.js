import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class CardImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calcHeight: 0,
    };
  }

  render() {
    const newStyle = this.props.style || {};
    const newTextStyle = this.props.textStyle || {};
    return (
      <View
        style={[styles.cardImage, newStyle]}
        onLayout={e => this.setState({ calcHeight: e.nativeEvent.layout.width * 9 / 16 })}
      >
        {this.props.source !== undefined && (
          <Image
            source={this.props.source}
            resizeMode={this.props.resizeMode || 'stretch'}
            resizeMethod={this.props.resizeMethod || 'resize'}
            style={[StyleSheet.absoluteFill, styles.image]}
          />
        )}
        {this.props.source === undefined && this.props.children}
        <View style={[styles.imageContainer, { height: this.state.calcHeight }]}>
          {this.props.title !== undefined && this.props.singleLineTitle && (
            <Text
              numberOfLines={1}
              style={[styles.imageTitleText, newTextStyle]}
            >
              {this.props.title}
            </Text>
          )}
          { /* eslint-disable-next-line max-len */ }
          {this.props.title !== undefined && (!this.props.singleLineTitle || this.props.singleLineTitle === undefined) && (
            <Text style={[styles.imageTitleText, newTextStyle]}>{this.props.title}</Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardImage: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignSelf: 'stretch',
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
    justifyContent: 'flex-end',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    alignSelf: 'stretch',
  },
  imageTitleText: {
    fontSize: 24,
    color: 'rgba(255 ,255 ,255 , 0.87)',
  },
});
