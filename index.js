import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Touchable from './src';

class Card extends Component {

  renderChildren() {
    let returnChildren = this.props.children;
    if((returnChildren.length>0)&&(returnChildren[0].type.name==="CardTitle")) {
      returnChildren = React.Children.map(returnChildren, (child) => {
        if(child.type.name==="CardTitle") {
          return React.cloneElement(child, {
            style: {...child.props.style, paddingTop: 24}
          });
        }
        else {
          return child;
        }
      })
    }
    if((returnChildren.length>0)&&(returnChildren[0].type.name==="CardImage")) {
      returnChildren = React.Children.map(returnChildren, (child) => {
        if(child.type.name==="CardImage") {
          return React.cloneElement(child, {
            style: {...child.props.style, borderTopLeftRadius: 2, borderTopRightRadius: 2}
          });
        }
        else {
          return child;
        }
      })
    }
    if((returnChildren.length>=2)&&(returnChildren.map((child)=>{return child.type.name;}).join("").includes("CardImageCardTitle"))) {
      returnChildren = React.Children.map(returnChildren, (child) => {
        if(child.type.name==="CardImage") {
          return React.cloneElement(child, {
            style: {...child.props.style, marginBottom: 0}
          });
        }
        else {
          return child;
        }
      })
    }
    return returnChildren;
  }

  render() {
    const newStyle = this.props.style || {};
    return (
      <View style={[styles.container, styles.card, newStyle]}>
        {this.renderChildren()}
      </View>
    );
  }

}

class CardImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calc_height: 0
    }
  }
  render () {
    const newStyle = this.props.style || {};
    return (
      <View style={[styles.cardImage, newStyle]} onLayout={(e)=>{this.setState({calc_height: e.nativeEvent.layout.width*9/16});}}>
        <Image source={this.props.source} resizeMode="stretch" style={[styles.imageContainer,  {height: this.state.calc_height}]}>
          {this.props.title!==undefined &&
            <Text style={styles.imageTitleText}>{this.props.title}</Text>
          }
        </Image>
      </View>
    );
  }
}

class CardTitle extends Component {
  render () {
    const newStyle = this.props.style || {};
    let titleStyle = styles.titleText;
    let subtitleStyle = styles.subtitleText;
    if((this.props.title!==undefined)&&(this.props.subtitle!==undefined)) {
      if(this.props.subtitleAbove===true) {
        subtitleStyle = [subtitleStyle, {marginBottom: 12}];
      }
      else {
        titleStyle = [titleStyle, {marginBottom: 12}];
      }
    }
    if(this.props.subtitleAbove!==true) {
      return (
        <View style={[styles.cardTitle, newStyle]}>
          {this.props.title!==undefined &&
            <Text style={titleStyle}>{this.props.title}</Text>
          }
          {this.props.subtitle!==undefined &&
            <Text style={subtitleStyle}>{this.props.subtitle}</Text>
          }
        </View>
      );
    }
    else {
      return (
        <View style={[styles.cardTitle, newStyle]}>
          {this.props.subtitle!==undefined &&
            <Text style={subtitleStyle}>{this.props.subtitle}</Text>
          }
          {this.props.title!==undefined &&
            <Text style={titleStyle}>{this.props.title}</Text>
          }
        </View>
      );
    }
  }
}

class CardContent extends Component {
  render () {
    const newStyle = this.props.style || {};
    return (
      <View style={[styles.cardContent, newStyle]}>
        {this.props.text !== undefined ? <Text style={styles.contentText}>{this.props.text}</Text> : this.props.children}
      </View>
    );
  }
}

class CardButton extends Component {
  render() {
    const newStyle = this.props.style || {};
    let directionStyle = this.props.inColumn===true ? styles.CardButtonInColumn : styles.CardButtonInRow;
    return (
      <Touchable style={[directionStyle, newStyle]}>
        <Text style={this.props.color!==undefined ? [styles.buttonText, {color: this.props.color}] : styles.buttonText}>{this.props.title.toUpperCase()}</Text>
      </Touchable>      
    );
  }
}

class CardAction extends Component {

  renderChildren() {
    let returnChildren = this.props.children;
    if(this.props.inColumn===true) {
      returnChildren = React.Children.map(returnChildren, (child) => {
        if(child.type.name==="CardButton") {
          return React.cloneElement(child, {
            inColumn: true
          });
        }
        else {
          return child;
        }
      })
    }
    return returnChildren;
  }

  render () {
    const newStyle = this.props.style || {};
    let directionStyle = this.props.inColumn===true ? styles.cardActionInColumn : styles.cardActionInRow;
    return (
      <View style={this.props.seperator ? [directionStyle, styles.seperatorAdd, newStyle] : [directionStyle, newStyle]}>
        {this.renderChildren()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    margin: 5
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    }
  },
  cardImage: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignSelf: 'stretch',
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
    justifyContent: 'flex-end'
  },
  imageTitleText: {
    fontSize: 24,
    color: 'rgba(255 ,255 ,255 , 0.87)'    
  },
  cardTitle: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16
  },
  titleText: {
    fontSize: 24,
    color: 'rgba(0 ,0 ,0 , 0.87)'
  },
  subtitleText: {
    fontSize:14,
    color: 'rgba(0 ,0 ,0 , 0.38)'
  },
  cardContent: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16
  },
  contentText: {
    fontSize: 14,
    color: 'rgba(0 ,0 ,0 , 0.54)'
  },
  cardActionInRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'stretch'
  },
  cardActionInColumn: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    alignSelf: 'stretch'
  },
  seperatorAdd: {
    borderTopColor: '#E9E9E9',
    borderTopWidth: 1
  },
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

export {
  Card,
  CardTitle,
  CardAction,
  CardButton,
  CardContent,
  CardImage
}
