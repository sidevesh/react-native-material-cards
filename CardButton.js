import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { Touchable } from './src';

export default class CardButton extends Component {
  render() {
    const newStyle = this.props.style || {};
    const newTitleStyle = this.props.titleStyle || {};
    let directionStyle = this.props.inColumn ? styles.CardButtonInColumn : styles.CardButtonInRow;
    return (
      <Touchable style={[directionStyle, newStyle]} onPress={this.props.onPress}>
        {this.props.title !== undefined && (
          <Text
            style={
              this.props.color !== undefined
                ? [styles.buttonText, newTitleStyle, { color: this.props.color }]
                : [styles.buttonText, newTitleStyle]
            }
          >
            {this.props.title.toUpperCase()}
          </Text>
        )}
        {this.props.title === undefined && this.props.children}
      </Touchable>      
    );
  }
}

const styles = StyleSheet.create({
  CardButtonInRow: {
    height: 36,
    marginLeft: 8,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  CardButtonInColumn: {
    height: 36,
    marginLeft: 8,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 2,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
    color: 'orange',
  }
});
