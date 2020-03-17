import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { Touchable } from './utils';

const CardButton = (props) => {
  const newStyle = props.style || {};
  const newTitleStyle = props.titleStyle || {};
  const directionStyle = props.inColumn ? styles.CardButtonInColumn : styles.CardButtonInRow;
  return (
    <Touchable style={[directionStyle, newStyle]} onPress={props.onPress}>
      {props.title !== undefined && (
        <Text
          style={
            props.color !== undefined
              ? [styles.buttonText, newTitleStyle, { color: props.color }]
              : [styles.buttonText, newTitleStyle]
          }
        >
          {props.title.toUpperCase()}
        </Text>
      )}
      {props.title === undefined && props.children}
    </Touchable>
  );
};

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
  },
});

export default CardButton;
