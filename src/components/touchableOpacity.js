import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
const Button = ({
  testID,
  onPress,
  disabled,
  children,
  //default styles
  buttonStyle = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle = {
    height: 0,
    width: 0
  },
  textStyle = {
    alignSelf: 'center',
    color: '#161616',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  },

}) => {
  return (
    <TouchableOpacity testID={testID} onPress={onPress} style={buttonStyle} disabled={disabled}>
      {/*<Image style={imageStyle} source={imageSource} />*/}
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
export { Button };
