import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          height: 30,
          width: 30,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffff',
          borderRadius: 20,
        }}
        onPress={() => {
          props.Screen('Login');
        }}>
        <ShowImage
          source={require('../utils/Assest/back.png')}
          color={'#410E68'}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <ShowImage
          source={require('../utils/Assest/menu.png')}
          color={'#ffffff'}
        />
      </TouchableOpacity>
    </View>
  );
}

const ShowImage = props => (
  <Image
    style={{height: 28, width: 28}}
    tintColor={props.color}
    source={props.source}
  />
);
const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#410E68',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
    shadowOpacity: 0.2,
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
});
