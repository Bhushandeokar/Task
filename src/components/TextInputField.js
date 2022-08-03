import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function TextInputField(props) {
  return (
    <View style={{width: '100%'}}>
      <View>
        <Text style={Styles.TextStyle}>{props.TextContainerName}</Text>
      </View>
      <View style={Styles.InputFieldStyle}>
        <Image
          style={{height: 28, width: 28, marginRight: 10}}
          tintColor={'#CFCFCF'}
          source={props.source}
        />
        <TextInput
          style={{width: '100%', fontSize: 16}}
          placeholder={props.placeholderName}
          secureTextEntry={props.secureTextEntry ? true : false}
          color={'black'}
          onChange={val => props.textFieldData(val)}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: '#F6F6F6',
  },
  TextStyle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#707070',
    marginBottom: 14,
  },
  InputFieldStyle: {
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderRadius: 10,
    height: 40,
    marginBottom: 23,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
  },
});
