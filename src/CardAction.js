import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export default class CardAction extends Component {
  renderChildren() {
    let returnChildren = this.props.children;
    if (this.props.inColumn) {
      returnChildren = React.Children.map(returnChildren, (child) => {
        if (child.type.name === 'CardButton') {
          return React.cloneElement(child, {
            inColumn: true,
          });
        }

        return child;
      });
    }
    return returnChildren;
  }

  render() {
    const newStyle = this.props.style || {};
    const directionStyle = this.props.inColumn ? styles.cardActionInColumn : styles.cardActionInRow;
    return (
      <View
        style={this.props.separator && !this.props.isDark
          ? [directionStyle, styles.separatorAddendum, newStyle]
          : [directionStyle, newStyle]
        }
      >
        {this.renderChildren()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardActionInRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  cardActionInColumn: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  separatorAddendum: {
    borderTopColor: '#E9E9E9',
    borderTopWidth: 1,
  },
});
