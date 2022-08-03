import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      <Buttons
        source={require('../utils/Assest/dashboardlayout.png')}
        ButtonName={'Dashboard'}
      />
      <Buttons
        source={require('../utils/Assest/report.png')}
        ButtonName={'Audit Reports'}
      />
      <Buttons
        source={require('../utils/Assest/person.png')}
        ButtonName={'Profile'}
      />
    </View>
  );
}

const Buttons = props => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 67,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 3,
      shadowOpacity: 0.2,
      elevation: 1,
      borderColor: '#00000029',
    }}>
    <Image
      style={{height: 28, width: 28}}
      tintColor={'#707070'}
      source={props.source}
    />
    <Text style={styles.TextStyle}>{props.ButtonName}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextStyle: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#707070',
  },
});
