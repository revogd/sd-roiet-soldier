import { StyleSheet, View } from 'react-native';
import { Text } from '@react-native-material/core'
import Soldiers from './components/Soldiers';
import { StatusBar } from 'expo-status-bar';
import NavBar from './NavBar';


export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <Text variant="h5">สำนักงานสัสดีจังหวัดร้อยเอ็ด</Text>
      <Soldiers />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 30,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
