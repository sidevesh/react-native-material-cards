import React, {Component} from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { Touchable } from './src';

export default class CardButton extends Component {
  render() {
    const newStyle = this.props.style || {};
    let directionStyle = this.props.inColumn===true ? styles.CardButtonInColumn : styles.CardButtonInRow;
    return (
      <Touchable style={[directionStyle, newStyle]} onPress={()=>{this.props.onPress()}}>
        <Text style={this.props.color!==undefined ? [styles.buttonText, {color: this.props.color}] : styles.buttonText}>{this.props.title.toUpperCase()}</Text>
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
    borderRadius: 2
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
    borderRadius: 2
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
    color: 'orange'
  }
});