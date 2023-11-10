import React, { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import globalStyles from '../styles'

interface ICounterProps {
  initialValue?: number;
  step?: number;
}

enum NumberType {
  EVEN='PAR',
  ODD='IMPAR',
}

export default ({ initialValue = 1, step = 1 }: ICounterProps) => {
  const [value, setValue] = useState<number>(initialValue);
  const [evenOdd, setEvenOdd] = useState<string>('');

  useEffect(() => {
    setEvenOdd(isEvenOrOdd(value));

  }, [value])

  const isEvenOrOdd = (n: number): string => {
    return n % 2 === 0 ? NumberType.EVEN : NumberType.ODD;
  }

  const increment = (n: number): void => {
    setValue(n + step);
  }

  const decrement = (n: number): void => {
    setValue(n - step);
  }

  return (
    <View style={globalStyles.container}>

      <View style={styles.counterContainer}>
        <Text style={styles.textH1}>{value}</Text>
        <Text style={styles.text}>{evenOdd}!</Text>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#fc5656' }]} 
          onPress={() => increment(value)}
          >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#7cec6a' }]} 
          onPress={() => decrement(value)}
          >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  counterContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#353535'
  },
  textH1: {
    fontSize: 64,
    fontWeight: '900',
    color: '#353535'
  }
});