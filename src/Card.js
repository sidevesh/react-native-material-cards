import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { Touchable } from './utils';

const TouchableIfOnPress = ({ onPress, children }) => {
  if (onPress === undefined) {
    return children;
  }

  return (
    <Touchable
      useForeground
      onPress={onPress}
    >
      {children}
    </Touchable>
  );
};

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calcOffsetHeight: 0,
    };
  }

  renderChildren() {
    let returnChildren = this.props.children;
    // If cardTitle is first component in Card, add 24 padding at top
    if (returnChildren.length > 0 && returnChildren[0].type.name === 'CardTitle') {
      returnChildren = React.Children.map(returnChildren, (child) => {
        if (child.type.name === 'CardTitle') {
          return React.cloneElement(child, {
            style: { ...child.props.style, paddingTop: 24 },
          });
        }

        return child;
      });
    }
    // If cardImage is first component in Card, set borderRadius for top edges
    if (returnChildren.length > 0 && returnChildren[0].type.name === 'CardImage') {
      returnChildren = React.Children.map(returnChildren, (child) => {
        if (child.type.name === 'CardImage') {
          return React.cloneElement(child, {
            style: { ...child.props.style, borderTopLeftRadius: 2, borderTopRightRadius: 2 },
          });
        }

        return child;
      });
    }
    // If cardTitle comes after cardImage, remove bottom padding from cardImage
    if (returnChildren.length >= 2 && returnChildren.map(child => child.type.name).join('').includes('CardImageCardTitle')) {
      returnChildren = React.Children.map(returnChildren, (child) => {
        if (child.type.name === 'CardImage') {
          return React.cloneElement(child, {
            style: { ...child.props.style, marginBottom: 0 },
          });
        }

        return child;
      });
    }
    // If cardAction comes after cardImage, remove bottom padding from cardImage
    if (returnChildren.length >= 2 && returnChildren.map(child => child.type.name).join('').includes('CardImageCardAction')) {
      returnChildren = React.Children.map(returnChildren, (child) => {
        if (child.type.name === 'CardImage') {
          return React.cloneElement(child, {
            style: { ...child.props.style, marginBottom: 0 },
          });
        }

        return child;
      });
    }
    // If avatarSource is supplied to Card,
    // pass it to first of whoever comes amongst cardTitle and cardContent
    if (this.props.avatarSource !== undefined && (returnChildren.map(child => child.type.name).includes('CardTitle') || returnChildren.map(child => child.type.name).includes('CardContent'))) {
      const titleIndex = returnChildren.map(child => child.type.name).indexOf('CardTitle');
      const contentIndex = returnChildren.map(child => child.type.name).indexOf('CardContent');
      let toIndex;
      if (titleIndex === -1) {
        toIndex = contentIndex;
      } else if (contentIndex === -1) {
        toIndex = titleIndex;
      } else {
        toIndex = titleIndex > contentIndex ? contentIndex : titleIndex;
      }
      returnChildren = React.Children.map(returnChildren, (child, index) => {
        if (index === toIndex) {
          return React.cloneElement(child, {
            avatarSource: this.props.avatarSource,
          });
        }

        return child;
      });
    }
    // If mediaSource or isDark(true) is supplied to Card, pass isDark is true to children
    if (this.props.mediaSource !== undefined || this.props.isDark) {
      returnChildren = React.Children.map(returnChildren, (child) => {
        if (child.type.name === 'CardContent' || child.type.name === 'CardTitle' || child.type.name === 'CardAction') {
          return React.cloneElement(child, { isDark: true });
        }

        return child;
      });
    }

    return returnChildren;
  }

  render() {
    const newStyle = this.props.style || {};
    if (this.props.mediaSource !== undefined) {
      return (
        <TouchableIfOnPress onPress={this.props.onPress}>
          <View style={[styles.mediaContainer, styles.mediaCard, newStyle]}>
            <Image
              source={this.props.mediaSource}
              resizeMode="stretch"
              resizeMethod="resize"
              style={[StyleSheet.absoluteFill, styles.media]}
            />
            <View
              style={[
                styles.mediaInsetContainer,
                { marginTop: this.state.calcOffsetHeight },
              ]}
              onLayout={e => this.setState({
                calcOffsetHeight: e.nativeEvent.layout.width - e.nativeEvent.layout.height,
              })}
            >
              {this.renderChildren()}
            </View>
          </View>
        </TouchableIfOnPress>
      );
    }

    return (
      <TouchableIfOnPress onPress={this.props.onPress}>
        <View style={[styles.container, styles.card, newStyle]}>
          {this.renderChildren()}
        </View>
      </TouchableIfOnPress>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    justifyContent: 'flex-start',
    margin: 5,
    overflow: 'hidden',
  },
  mediaContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    margin: 5,
    overflow: 'hidden',
  },
  mediaInsetContainer: {
    backgroundColor: '#00000070',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  media: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    alignSelf: 'stretch',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
  },
  mediaCard: {
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
  },
});
