import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import TextInputField from '../components/TextInputField';

export default function LoginScreen(props) {
  const [mail, setEmailID] = useState();
  const [Password, setPassword] = useState();
  return (
    <View style={Styles.container}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <View
          style={{
            flex: 1.2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 150, width: 190, bottom: 20, position: 'absolute'}}
            source={require('../utils/Assest/bookIcon.png')}
          />
        </View>
        <View
          style={{
            flex: 1.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInputField
            TextContainerName={'E-Mail Address'}
            source={require('../utils/Assest/mail.png')}
            textFieldData={val => {
              setEmailID(val);
            }}
          />
          <TextInputField
            TextContainerName={'Password'}
            source={require('../utils/Assest/lock.png')}
            secureTextEntry={true}
            textFieldData={val => {
              setPassword(val);
            }}
          />
          <View style={{height: 20, width: '100%'}}>
            <TouchableOpacity
              style={{position: 'absolute', right: 0}}
              onPress={() => {}}>
              <Text style={Styles.ForgotTextStyle}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles.subContainer}>
          <TouchableOpacity
            style={Styles.LoginButtonStyle}
            activeOpacity={0.5}
            onPress={() => props.Screen('Home')}>
            <Text style={Styles.LoginButtonTextStyle}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: '#F6F6F6',
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  ForgotTextStyle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'normal',
    color: '#707070',
  },
  LoginButtonTextStyle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    justifyContent: 'center',
    position: 'absolute',
  },
  LoginButtonStyle: {
    backgroundColor: '#410E68',
    borderRadius: 7,
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
