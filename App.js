import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Prashant!!! Finally Man</Text>
      <StatusBar style="auto" />
      <Welcome name="Prashant" />
    </View>
  );
}

const Welcome = (props) => (
  <View>
    <text>Hello {props.name}</text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
