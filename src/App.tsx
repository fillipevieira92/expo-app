import { SafeAreaView, View, StyleSheet } from 'react-native';
import { MaxMin, FirstComponent, Counter } from './components';
import styles from './styles';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Counter />
      </View>
    </SafeAreaView>
  )
};

export default App;
