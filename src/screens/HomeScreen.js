import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import Cards from '../components/Cards';

export default function HomeScreen(props) {
  const [Data, setData] = useState([]);
  const [call, setCall] = React.useState(false);

  const Stop = ms => new Promise(resolve => setTimeout(resolve, ms));

  const ApiCall = () => {
    fetch('https://gorest.co.in/public/v1/users')
      .then(res => res.json())
      .then(val => setData(val));
  };

  const onRefresh = async () => {
    setData([]);
    ApiCall();
    setCall(true);
    await Stop(2000);
    setCall(false);
  };

  useEffect(() => {
    ApiCall();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Header Screen={props.Screen} />

      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 15,
        }}>
        <View>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 23,
              fontWeight: 'bold',
              color: '#410E68',
            }}>
            Tasks
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 14,
              color: '#9D9B9B',
            }}>
            Search Results
          </Text>
        </View>

        <View style={{flex: 1, paddingTop: 15, justifyContent: 'center'}}>
          {Data && Data.data ? (
            <FlatList
              data={Data && Data.data ? Data.data : []}
              onRefresh={onRefresh}
              refreshing={call}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => <Cards item={item} />}
            />
          ) : (
            <ActivityIndicator size="large" color="#410E68" />
          )}
        </View>
      </View>
      <BottomNavigation />
    </View>
  );
}
