import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class CardImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calc_height: 0,
      componentWidth: 350,
      componentHeight: 194
    }
  }
  render () {
    const newStyle = this.props.style || {};
    const Component = this.props.component || Image;

    return (
      <View style={[styles.cardImage, newStyle]} onLayout={(e)=>{this.setState({calc_height: e.nativeEvent.layout.width*9/16});}}>

        <View style={[styles.imageContainer, {height: this.props.imageHeight || this.state.calc_height}]} onLayout={(e) => {this.setState({componentHeight: e.nativeEvent.layout.height, componentWidth: e.nativeEvent.layout.width});}}>
          <Component source={this.props.source} resizeMethod={this.props.resizeMethod || "resize"} style={[StyleSheet.absoluteFill, { width: this.props.imageWidth || this.state.componentWidth, height: this.props.imageHeight || this.state.componentHeight }, this.props.imageStyle]} />
        </View>
        <View styles={styles.imageContainer}>
          {this.props.title!==undefined && this.props.singleLineTitle == true &&
            <Text numberOfLines={1} style={styles.imageTitleText}>{this.props.title}</Text>
          }
          {this.props.title!==undefined && (this.props.singleLineTitle == false || this.props.singleLineTitle === undefined) &&
            <Text style={styles.imageTitleText}>{this.props.title}</Text>
          }
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
    overflow: "hidden"
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    flex: 1,
    flexDirection: 'column',
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
    justifyContent: 'flex-end',
    width: "100%"
  },
  imageTitleText: {
    fontSize: 24,
    color: 'rgba(255 ,255 ,255 , 0.87)'
  }
});
