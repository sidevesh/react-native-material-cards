import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Card extends Component {

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
    //If mediaSource or isDark(true) is supplied to Card, pass isDark is true to children
    if((this.props.mediaSource!==undefined)||(this.props.isDark)) {
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
        <Image borderRadius={2} source={this.props.mediaSource} resizeMode="stretch" style={[styles.mediaContainer, styles.mediaCard, newStyle]}>
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

const styles = StyleSheet.create({
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
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
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
  }
});