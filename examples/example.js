import React from 'react';
import {Text, View} from 'react-native';
import ScrollBar from '../index';
import {StyleSheet} from "react-native";

const book = {
  title: 'Book of Genesis',
  description:
  'In the beginning God created the heaven and the earth. [2] And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. [3] And God said, Let there be light: and there was light. [4] And God saw the light, that it was good: and God divided the light from the darkness. [5] And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day. [6] And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters. [7] And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so. [8] And God called the firmament Heaven. And the evening and the morning were the second day. [9] And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so. [10] And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good. [11] And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so. [12] And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good. [13] And the evening and the morning were the third day.'
};

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 36,
    fontWeight: '400',
    marginBottom: 50,
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

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
          style={{padding: 20, flex:1, backgroundColor:'#625554'}}>

          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.text}>{book.description}</Text>

        </ScrollBar>
      </View>
    </>
  );
}