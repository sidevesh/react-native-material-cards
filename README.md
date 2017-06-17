# React-Native-Material-Cards
A material design card component, customizable and versatile.

See [Google Material Design](https://material.io/guidelines/components/cards.html) for more info on Cards.

## Installation

```sh
npm install --save react-native-material-cards
```

## Basic Usage

```javascript
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
```

## Code

```js
<Card>
  <CardImage source={{uri: 'http://placehold.it/480x270'}} title="Above all i am here"/>
  <CardTitle title="This is title" subtitle="This is sub title"/>
  <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile"/>
  <CardAction seperator={true} inColumn={false}>
    <CardButton
      onPress={() => {}}
      title="Push"
      color='blue'
    />
    <CardButton
      onPress={() => {}}
      title="Later"
      color='blue'
    />
  </CardAction>
</Card>
```
### ToDo
* Add cards with side media

PRs are welcome :)
