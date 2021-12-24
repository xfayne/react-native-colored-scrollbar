**react-native-colored-scrollbar** is a customisable colored scrollbar component for react native.

[![NPM](https://img.shields.io/npm/v/react-instagram-zoom-slider?style=flat-square)](https://www.npmjs.com/package/react-instagram-zoom-slider)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-instagram-zoom-slider?style=flat-square)](https://bundlephobia.com/result?p=react-instagram-zoom-slider)

## Example

<p align="center">
  <img width="242" height="500" src="https://github.com/xfayne/react-native-colored-scrollbar/blob/master/ezgif-2-5a80fb1532.gif">
</p>

## Install

```bash
npm install react-native-colored-scrollbar
```

## Usage

```jsx
import React from 'react';
import {Text, View} from 'react-native';
import ScrollBar from 'react-native-colored-scrollbar';
import {StyleSheet} from 'react-native';
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
