import React, { useState } from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'

export default () => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  function onSubmit(): void {
    console.warn('Enviando formulário...');
  }

  function formIsValid(): boolean {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regexEmail.test(email) && password.length >= 5;
  }

  return (    
    <View style={styles.formContainer}>      
      <TextInput 
        placeholder='Email'
        value={email}
        textContentType={'emailAddress'}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor={'#ffffffc5'}
      />
      <TextInput 
        placeholder='Password'
        value={password}
        textContentType={'password'}
        onChangeText={setPassword}
        style={styles.input}
        placeholderTextColor={'#ffffffc5'}
      />
      <View style={styles.btn}>
        <Button 
          title='Submit' 
          onPress={onSubmit}
          disabled={!formIsValid()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#f76b6b',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    padding: 50,
    gap: 5
  },
  input: {
    borderBottomColor: '#3caef0',
    borderBottomWidth: .8,
    color: '#fff',
    height: 40,
  },
  btn: {
    marginTop: 25,
  }
})
