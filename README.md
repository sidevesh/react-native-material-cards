# React-Native-Material-Cards
A material design card component, customizable and versatile.

![Snackbar demo](https://media.giphy.com/media/zChTSWog7TNmM/giphy.gif)
![With fab](https://media.giphy.com/media/6oCCk98unakbC/giphy.gif)

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
## Options
| Prop        | Type           | Effect  | Default Value |
| ------------- |-------------| -----| -----|
| visible | boolean | Show or hide the snackbar | none |
| textMessage | string | The main message text | none |
| actionHandler | function | Function to be called when button is pressed, if absent no action button is shown | none |
| actionText | message | The text of action button, will be uppercased automatically | none |
| backgroundColor | color | The background color of snackbar | #484848 |
| accentColor | color | The color of action button text | orange |
| messageColor | color | The color of main message text | #FFFFFF |
| distanceCallback | function | Function to be caled whenever snackbar moves in and out or changes layout, the function will be supplied a number indicating distance taken up by snackbar on bottom. | (distance) => {} |

