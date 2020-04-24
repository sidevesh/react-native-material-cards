# react-native-material-cards
A material design card component, customizable and versatile.

![Images](http://i.imgur.com/iDym7bI.png)

See [Google Material Design](https://material.io/guidelines/components/cards.html) for more info on Cards.

## Installation

```sh
npm install --save react-native-material-cards
```

## Basic Usage

Import the components like so:  
```javascript
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
```

Then insert the card in your code:
```js
<Card>
  <CardImage 
    source={{uri: 'http://placehold.it/480x270'}} 
    title="Above all i am here"
  />
  <CardTitle 
    title="This is a title" 
    subtitle="This is subtitle"
   />
  <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
  <CardAction 
    separator={true} 
    inColumn={false}>
    <CardButton
      onPress={() => {}}
      title="Push"
      color="blue"
    />
    <CardButton
      onPress={() => {}}
      title="Later"
      color="blue"
    />
  </CardAction>
</Card>
```

## Card Component Options
| Prop        | Type           | Effect  | Default Value |
| ------------- |-------------| -----| -----|
| `isDark` | `boolean` | If the card background is dark, sets a light text color, this prop is passed to all child components | `true` |
| `mediaSource` | `object` | The image to show in background of a card, with content overlayed, passed to Image's `source` prop | `undefined` |
| `avatarSource` | `object` | The avatar image to be shown in the card's content or header section, whichever comes first, passed to Image's `source` prop | `undefined` |
| `style` | `object` | The style object to be merged with the default style of root container | `{}` |

## CardTitle Component Options
| Prop        | Type           | Effect  | Default Value |
| ------------- |-------------| -----| -----|
| `title` | `string` | The title text | `undefined` |
| `subtitle` | `string` | The subtitle text | `undefined` |
| `subtitleAbove` | `boolean` | Whether the subtitle should be shown above the title | `false` |
| `avatarSource` | `object` | The avatar image to be shown, passed to Image's `source` prop | `undefined` |
| `style` | `object` | The style object to be merged with the default style of root container | `{}` |
| `titleStyle` | `object` | The style object to be merged with the default style of title text | `{}` |
| `subtitleStyle` | `object` | The style object to be merged with the default style of subtitle text | `{}` |

## CardContent Component Options
| Prop        | Type           | Effect  | Default Value |
| ------------- |-------------| -----| -----|
| `text` | `string` | The content text, this can be skipped and any custom content can be rendered as children | `undefined` |
| `avatarSource` | `object` | The avatar image to be shown, passed to Image's `source` prop | `undefined` |
| `style` | `object` | The style object to be merged with the default style of root container | `{}` |
| `textStyle` | `object` | The style object to be merged with the default style of text | `{}` |

## CardImage Component Options
| Prop        | Type           | Effect  | Default Value |
| ------------- |-------------| -----| -----|
| `source` | `object` | The image to be shown, passed to Image's `source` prop, , this can be skipped and any custom image or content can be rendered as children | `undefined` |
| `resizeMode` | `string` | Determines how to resize the image when the frame doesn't match the raw image dimensions | `stretch` |
| `resizeMethod` | `string` | Resize the image when the image's dimensions differ from the image view's dimensions. | `resize` |
| `singleLineTitle` | `boolean` | Set to true if you want the title to be one line, redacted with ellipses | `true` |
| `style` | `object` | The style object to be merged with the default style of root container | `{}` |
| `textStyle` | `object` | The style object to be merged with the default style of text | `{}` |

## CardAction Component Options
| Prop        | Type           | Effect  | Default Value |
| ------------- |-------------| -----| -----|
| `separator` | `boolean` | Whether a separator should be shown | `true` |
| `inColumn` | `boolean` | Whether the buttons should be stacked in a column | `false` |
| `style` | `object` | The style object to be merged with the default style of root container | `{}` |

## CardButton Component Options
| Prop        | Type           | Effect  | Default Value |
| ------------- |-------------| -----| -----|
| `title` | `string` | The button's text, this can be skipped and any custom title or content can be rendered as children | `undefined` |
| `color` | `string` | The color of button text | `orange` |
| `onPress` | `function` | The function to be called when button is pressed | `noop` (defined in [`src/utils`](https://github.com/sidevesh/react-native-material-cards/blob/master/src/utils/index.js)) |
| `style` | `object` | The style object to be merged with the default style of root container | `{}` |
| `titleStyle` | `object` | The style object to be merged with the default style of button title | `{}` |

### To do
* Add cards with side media

PRs are welcome :)
