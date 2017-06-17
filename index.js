import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Touchable } from './src';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calc_offset_height: 0
    }
  }

  renderChildren() {
    let returnChildren = this.props.children;
    //If cardTitle is first component in Card, add 24 padding at top
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
    //If cardImage is first component in Card, set borderRadius for top edges
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
    //If cardTitle comes after cardImage, remove bottom padding from cardImage
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
    //If cardAction comes after cardImage, remove bottom padding from cardImage
    if((returnChildren.length>=2)&&(returnChildren.map((child)=>{return child.type.name;}).join("").includes("CardImageCardAction"))) {
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
    //If avatarSource is supplied to Card, pass it to first of whoever comes amongst cardTitle and cardContent
    if((this.props.avatarSource!==undefined)&&((returnChildren.map((child)=>{return child.type.name;}).includes("CardTitle"))||(returnChildren.map((child)=>{return child.type.name;}).includes("CardContent")))) {
      let title_index = returnChildren.map((child)=>{return child.type.name;}).indexOf("CardTitle");
      let content_index = returnChildren.map((child)=>{return child.type.name;}).indexOf("CardContent");
      let to_index;
      if(title_index===-1) {
        to_index = content_index;
      }
      else if(content_index===-1) {
        to_index = title_index;
      }
      else {
        to_index = title_index > content_index ? content_index : title_index;
      }
      returnChildren = React.Children.map(returnChildren, (child, index) => {
        if(index===to_index) {
          return React.cloneElement(child, {
            avatarSource: this.props.avatarSource
          });
        }
        else {
          return child;
        }
      })
    }
    //If mediaSource is supplied to Card, pass isDark is true to children
    if(this.props.mediaSource!==undefined) {
      returnChildren = React.Children.map(returnChildren, (child) => {
        if((child.type.name==="CardContent")||(child.type.name==="CardTitle")||(child.type.name==="CardAction")) {
          return React.cloneElement(child, {
            isDark: true
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
    if(this.props.mediaSource!==undefined) {
      return (
        <Image source={this.props.mediaSource} resizeMode="stretch" style={[styles.mediaContainer, styles.mediaCard, newStyle]}>
          <View style={[styles.mediaInsetContainer, {marginTop: this.state.calc_offset_height}]} onLayout={(e)=>{this.setState({calc_offset_height: (e.nativeEvent.layout.width-e.nativeEvent.layout.height)});}}>
            {this.renderChildren()}
          </View>
        </Image>
      );
    }
    else {
      return (
        <View style={[styles.container, styles.card, newStyle]}>
          {this.renderChildren()}
        </View>
      );
    }
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
    let titleStyle = [styles.titleText];
    let subtitleStyle = [styles.subtitleText];
    if((this.props.title!==undefined)&&(this.props.subtitle!==undefined)&&(this.props.avatarSource===undefined)) {
      if(this.props.subtitleAbove===true) {
        subtitleStyle = [...subtitleStyle, {marginBottom: 12}];
      }
      else {
        titleStyle = [...titleStyle, {marginBottom: 12}];
      }
    }
    if(this.props.isDark) {
      subtitleStyle = [...subtitleStyle, styles.lightText];
      titleStyle = [...titleStyle, styles.lightText];
    }
    else {
      titleStyle = [...titleStyle, styles.darkText];
    }
    if(this.props.subtitleAbove!==true) {
      return (
        <View style={[styles.cardTitle, newStyle]}>
          {this.props.avatarSource!==undefined &&
            <Image source={this.props.avatarSource} resizeMode="stretch" style={styles.avatarStyle} />
          }
          <View style={styles.cardTitleTextCont}>
            {this.props.title!==undefined &&
              <Text style={this.props.avatarSource===undefined ? titleStyle : [titleStyle, {fontSize: 14}]}>{this.props.title}</Text>
            }
            {this.props.subtitle!==undefined &&
              <Text style={subtitleStyle}>{this.props.subtitle}</Text>
            }
          </View>
        </View>
      );
    }
    else {
      return (
        <View style={[styles.cardTitle, newStyle]}>
          {this.props.avatarSource!==undefined &&
            <Image source={this.props.avatarSource} resizeMode="stretch" style={styles.avatarStyle} />
          }
          <View style={styles.cardTitleTextCont}>
            {this.props.subtitle!==undefined &&
              <Text style={subtitleStyle}>{this.props.subtitle}</Text>
            }
            {this.props.title!==undefined &&
              <Text style={this.props.avatarSource===undefined ? titleStyle : [titleStyle, {fontSize: 14}]}>{this.props.title}</Text>
            }
          </View>
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

class CardButton extends Component {
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
      <View style={(this.props.seperator)&&(!this.props.isDark) ? [directionStyle, styles.seperatorAdd, newStyle] : [directionStyle, newStyle]}>
        {this.renderChildren()}
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
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    justifyContent: 'flex-start',
    margin: 5
  },
  mediaContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    margin: 5
  },
  mediaInsetContainer: {
    backgroundColor: "#00000070",
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end'
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
  mediaCard: {
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
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16
  },
  cardTitleTextCont: {
    flex: 1,
    flexDirection: 'column'
  },
  titleText: {
    fontSize: 24
  },
  subtitleText: {
    fontSize:14,
    color: 'rgba(0 ,0 ,0 , 0.38)'
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
  },
  avatarStyle: {
    width: 40,
    height: 40,
    borderRadius: 150,
    marginRight: 16
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

