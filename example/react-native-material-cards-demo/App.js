import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-material-cards';

export default class MaterialCards extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Card
            mediaSource={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/NEO_lake_eyre_big.jpg/600px-NEO_lake_eyre_big.jpg' }}
            style={{ margin: 10 }}
          >
            <CardTitle
              subtitleAbove={false}
              title="Title text"
              subtitle="subtitle text"
            />
            <CardAction separator={true} inColumn={false}>
              <CardButton
                onPress={() => {}}
                title="Action 1"
              />
              <CardButton
                onPress={() => {}}
                title="Action 2"
              />
            </CardAction>
          </Card>
          <Card
            mediaSource={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/NEO_lake_eyre_big.jpg/600px-NEO_lake_eyre_big.jpg' }}
            style={{ margin: 10, borderRadius: 20 }}
          >
            <CardTitle
              subtitleAbove={false}
              title="Title text"
              subtitle="subtitle text"
            />
            <CardAction separator={true} inColumn={false}>
              <CardButton
                onPress={() => {}}
                title="Action 1"
              />
              <CardButton
                onPress={() => {}}
                title="Action 2"
              />
            </CardAction>
          </Card>
          <Card style={{ margin: 10, borderRadius: 20 }}>
            <CardImage
              source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_960_720.jpg'}}
              style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
            />
            <CardAction separator={false} inColumn={false}>
              <CardButton
                onPress={() => {}}
                title="Action 1"
              />
              <CardButton
                onPress={() => {}}
                title="Action 2"
              />
            </CardAction>
          </Card>
          <Card style={{ margin: 10, backgroundColor: '#212121' }} isDark={true}>
            <CardTitle
              avatarSource={{ uri: 'https://picsum.photos/50/50' }}
              subtitleAbove={false}
              title="Title text"
              subtitle="subtitle text"
            />
            <CardImage
              source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_960_720.jpg' }}
            />
            <CardContent
              avatarSource={{ uri: 'https://picsum.photos/50/50' }}
              text="lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir"
            />
            <CardAction separator={true} inColumn={false}>
              <CardButton
                onPress={() => {}}
                title="Push"
              />
              <CardButton
                onPress={() => {}}
                title="Push"
              />
            </CardAction>
          </Card>
          <Card style={{ margin: 10 }} avatarSource={{ uri: 'https://picsum.photos/50/50' }}>
            <CardImage source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_960_720.jpg' }} />
            <CardTitle subtitleAbove={true} title="Title text" subtitle="subtitle text" />
            <CardContent text="lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir" />
            <CardAction separator={true} inColumn={false}>
              <CardButton
                onPress={() => {}}
                title="Push"
              />
              <CardButton
                onPress={() => {}}
                title="Push"
              />
            </CardAction>
          </Card>
          <Card style={{ margin: 10 }}>
            <CardImage title="Lighthouse" source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_960_720.jpg' }} />
            <CardAction separator={true} inColumn={true}>
              <CardButton
                onPress={() => {}}
                title="Push"
              />
              <CardButton
                onPress={() => {}}
                title="Push"
              />
            </CardAction>
            <CardContent text="lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir" />
          </Card>
          <Card style={{ margin: 10 }}>
            <CardTitle title="Title text" />
            <CardAction separator={false} inColumn={true}>
              <CardButton
                onPress={() => {}}
                title="Push"
              />
            </CardAction>
            <CardContent text="lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir" />
          </Card>
          <Card style={{ margin: 10 }}>
            <CardImage title="Lighthouse" source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_960_720.jpg' }} />
            <CardTitle subtitleAbove={true} title="Title text" subtitle="subtitle text" />
            <CardContent text="lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir" />
            <CardAction separator={true} inColumn={false}>
              <CardButton
                onPress={() => {}}
                title="Push"
              />
              <CardButton
                onPress={() => {}}
                title="Push"
              />
            </CardAction>
          </Card>
          <Card style={{ margin: 10 }}>
            <CardImage source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_960_720.jpg' }} />
            <CardTitle title="Title text" subtitle="subtitle text" />
            <CardContent text="lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir" />
            <CardAction separator={true} inColumn={false}>
              <CardButton
                onPress={() => {}}
                title="Push"
              />
              <CardButton
                onPress={() => {}}
                title="Push"
              />
            </CardAction>
          </Card>
          <Card style={{ margin: 10 }}>
            <CardTitle title="Title text" />
            <CardContent text="lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir" />
            <CardAction separator={true} inColumn={true}>
              <CardButton
                onPress={() => {}}
                title="Push"
              />
              <CardButton
                onPress={() => {}}
                title="Push"
              />
            </CardAction>
          </Card>
          <Card style={{ margin: 10 }}>
            <CardTitle title="Title text" />
            <CardContent text="lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir" />
            <CardAction separator={true} inColumn={false}>
              <CardButton
                onPress={() => {}}
                title="Push"
              />
              <CardButton
                onPress={() => {}}
                title="Push"
              />
            </CardAction>
          </Card>
          <Card
            mediaSource={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/NEO_lake_eyre_big.jpg/600px-NEO_lake_eyre_big.jpg' }}
            style={{ margin: 10 }}
            onPress={() => alert('Card clicked')}
          >
            <CardTitle
              subtitleAbove={false}
              title="Title text"
              subtitle="subtitle text"
            />
            <CardAction separator={true} inColumn={false}>
              <CardButton
                onPress={() => {}}
                title="Action 1"
              />
              <CardButton
                onPress={() => {}}
                title="Action 2"
              />
            </CardAction>
          </Card>
          <Card style={{ margin: 10 }} onPress={() => alert('Card clicked')}>
            <CardImage
              source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_960_720.jpg'}}
            />
            <CardAction separator={false} inColumn={false}>
              <CardButton
                onPress={() => {}}
                title="Action 1"
              />
              <CardButton
                onPress={() => {}}
                title="Action 2"
              />
            </CardAction>
          </Card>
          <Card style={{ margin: 10 }} onPress={() => alert('Card clicked')}>
            <CardTitle title="Title text" />
            <CardContent text="lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir" />
            <CardAction separator={true} inColumn={true}>
              <CardButton
                onPress={() => {}}
                title="Push"
              />
              <CardButton
                onPress={() => {}}
                title="Push"
              />
            </CardAction>
          </Card>
          <Card style={{ margin: 10 }} onPress={() => alert('Card clicked')}>
            <CardTitle title="Title text" />
            <CardContent text="lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir lorem ipsum dolor sit amet consectur lit arek panecea lorem ipsum door sit amet connesuir" />
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#B0BEC5',
  },
});
