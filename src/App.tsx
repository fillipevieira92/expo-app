import { SafeAreaView, View, StyleSheet } from 'react-native';
import { MaxMin, FirstComponent } from './components';
import styles from './styles';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <MaxMin n1={15} n2={15} />
        <MaxMin n1={5} n2={15} />
        <MaxMin n1={23} n2={19} />
      </View>
    </SafeAreaView>
  )
};

export default App;
