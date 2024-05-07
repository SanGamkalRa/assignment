import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const Input = ({placeholder, onChangeText}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        placeholderTextColor={'black'}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
  },
});
