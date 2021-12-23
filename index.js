import React, {useState, useRef} from 'react';
import {ScrollView, View, Animated} from 'react-native';
import PropTypes from 'prop-types';

export default function ColoredScrollBar({
  indicatorColor = '#CFD8DC',
  indicatorBackground = '#455A64',
  indicatorWidth = 6,
  persistent = false,
  style,
  children,
}) {
  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);
  const [indicatorOpacity, setOpacity] = useState(new Animated.Value(0));
  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) / completeScrollBarHeight
      : visibleScrollBarHeight;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight,
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: 'clamp',
  });

  const fade = value => {
    Animated.timing(indicatorOpacity, {
      toValue: value,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const Indicator = () => (
    <Animated.View
      style={{
        opacity: persistent ? 1 : indicatorOpacity,
        height: '100%',
        width: indicatorWidth,
        backgroundColor: indicatorBackground,
        borderRadius: 8,
      }}>
      <Animated.View
        style={{
          width: indicatorWidth,
          borderRadius: 8,
          backgroundColor: indicatorColor,
          height: scrollIndicatorSize,
          transform: [{translateY: scrollIndicatorPosition}],
        }}
      />
    </Animated.View>
  );
  return (
    <>
      <View style={{flexDirection: 'row', ...style}}>
        <ScrollView
          contentContainerStyle={{paddingRight: 14}}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={(width, height) => {
            setCompleteScrollBarHeight(height);
          }}
          onLayout={({
            nativeEvent: {
              layout: {height},
            },
          }) => {
            setVisibleScrollBarHeight(height);
          }}
          onScroll={(Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollIndicator}}}],
            {useNativeDriver: false},
          ))}
          onMomentumScrollEnd={() => fade(0)}
          onScrollBeginDrag={() => fade(1)}
          scrollEventThrottle={16}>
          {children}
        </ScrollView>
        <Indicator />
      </View>
    </>
  );
}

ColoredScrollBar.propTypes = {
  indicatorColor: PropTypes.string,
  indicatorBackground: PropTypes.string,
  innerWidth: PropTypes.number,
  style: PropTypes.object,
  persitent: PropTypes.bool,
};
