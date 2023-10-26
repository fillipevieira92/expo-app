import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';

interface IMaxMinProps {
  n1: number;
  n2: number;
}

export default ({ n1, n2 }: IMaxMinProps) => {
  const [biggerNumber, setBiggerNumber] = useState<number>();
  const [smallerNumber, setSmallerNumber] = useState<number>();
  const [isEqual, setIsEqual] = useState<boolean>(false);
  
  useEffect(() => {
    function getNumbers(n1: number, n2: number) {
      const equal = (n1 === n2);
      setIsEqual(equal);

      if (!equal) {
        setBiggerNumber(n1 > n2 ? n1 : n2);
        setSmallerNumber(n1 > n2 ? n2 : n1);
      }
    }
    
    getNumbers(n1, n2);
  }, [n1, n2])

  return (
    <View>
      {isEqual && <Text>Valor {n1} e {n2} são iguais</Text>}
      {!isEqual &&  <Text>Valor {biggerNumber} é maior que valor {smallerNumber}</Text>}
    </View>
  )
}