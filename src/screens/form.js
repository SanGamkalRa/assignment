import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';

const Form = () => {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const onSubmit = () => {
    if (!validateEmail(email)) {
      alert('Please enter valid email address')
    }else if(email == ''){
      alert('Please enter email address');
    }else if (mobile == '') {
      alert('Please enter mobile number');
    } else if (address == '') {
      alert('Please enter address');
    } else {
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white',justifyContent:"center"}}>
      <Text style={styles.header}>Form Submition</Text>
      <Input
        placeholder={'Email'}
        onChangeText={e => {
          setEmail(e);
        }}
      />
      <Input
        placeholder={'Mobile'}
        onChangeText={e => {
          setMobile(e);
        }}
      />
      <Input
        placeholder={'Address'}
        onChangeText={e => {
          setAddress(e);
        }}
      />

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  button: {
    width: '50%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  header: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
  },
});
