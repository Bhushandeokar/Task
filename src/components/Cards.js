import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function Cards(props) {
  const [expand, setExpand] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.cardStyle}
      onPress={() => setExpand(!expand)}>
      <View style={styles.ImageStyle}>
        {props.item.status == 'active' ? (
          <ShowImage source={require('../utils/Assest/correct.png')} />
        ) : (
          <ShowImage source={require('../utils/Assest/close.png')} />
        )}
      </View>

      <Text style={{color: '#410E68', fontSize: 15, fontWeight: '500'}}>
        #{props.item.id}
      </Text>
      <Text style={styles.nameStyle}>{props.item.name}</Text>
      <TextFiled TextData={`E-Mail ID: ${props.item.email}`} />

      <View style={{marginVertical: 2}}>
        <TextFiled TextData={`Gender: ${props.item.gender}`} />
        <Text style={styles.statusStyle}>
          Status:
          <Text
            style={{
              fontSize: 12,
              color: props.item.status == 'active' ? '#6DA937' : '#D24D4D',
            }}>
            {props.item.status.charAt(0).toUpperCase() +
              props.item.status.slice(1)}
          </Text>
        </Text>
      </View>

      {expand ? (
        <View>
          <TextFiled TextData={'City:Pune'} />
          <TextFiled TextData={'Mobile.No:7249869670'} />
          <TextFiled TextData={'State:MH'} />
          <TextFiled TextData={'Country:India'} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

const TextFiled = props => (
  <Text style={{color: '#000000', fontSize: 14}}>{props.TextData}</Text>
);
const ShowImage = props => (
  <Image style={{height: 28, width: 28}} source={props.source} />
);

const styles = StyleSheet.create({
  cardStyle: {
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
    minHeight: 132,
    padding: 15,
    borderRadius: 10,
  },
  ImageStyle: {position: 'absolute', right: 14, top: 11},
  nameStyle: {
    color: '#000000',
    fontSize: 23,
    fontWeight: '500',
    marginVertical: 3,
  },
  statusStyle: {
    position: 'absolute',
    right: 5,
    bottom: 0,
    color: '#000000',
    fontSize: 12,
  },
});
