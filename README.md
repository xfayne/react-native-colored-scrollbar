<h1 align="center">react-native-colored-scrollbar</h1>

<p align="center">A customisable colored scrollbar component for react native<p>
  
## Description

Simple, lightweight and easy to use custom scrollbar component.<br/> Pass the component customisable props and your content inside it.

## Example

<p align="center">
  <img width="242" height="500" src="https://github.com/xfayne/react-native-colored-scrollbar/blob/master/examples/scrollbar-loop.gif?raw=true">
</p>

## Install

```bash
npm install react-native-colored-scrollbar
```

## Usage

```jsx
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ScrollBar from 'react-native-colored-scrollbar';
import {styles,book} from './data';

export default function App() {
  return (
    <>
      <View style={{flex: 1, paddingTop: 50, backgroundColor:'#28BFA7'}}>
      
        <View style={{alignItems: 'center'}}>
          <Text style={styles.header}>Colored Scroll Bar</Text>
        </View>
        
        <ScrollBar
          indicatorBackground="#006064"
          indicatorColor="#18FFFF"
          persistent=true
          style={{padding: 20, flex:1, backgroundColor:'#625554'}}>

          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.text}>{book.description}</Text>

        </ScrollBar>
        
      </View>
    </>
  );
}

```

### Props

Common props you may want to specify include:

| Prop                    | Description                                                                                          | Default    |
| ----------------------- | ---------------------------------------------------------------------------------------------------- | ---------- |
| `indicatorColor`        | Color of the scroll indicator                                                                        |#CFD8DC     |
| `indicatorBackground`   | Background color of the scroll indicator                                                             |#455A64     |
| `indicatorWidth`        | Width of the scroll indicator                                                                        | 6          |
| `persistent`            | Causes the scrollbars not to turn transparent when they are not in use                               | false      |
| `style`                 | Style object of the ScrollView container                                                             | null       |

## License

MIT Licensed. Copyright © [Or Fayne](https://github.com/xfayne) 2021.
