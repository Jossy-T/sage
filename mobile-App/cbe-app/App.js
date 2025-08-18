import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Animation from './component/Animation';
import Animation2 from './component/Animation2';
import Cameratake from './component/Cameratake';

export default function App() {
  return (
    <View>
      <Cameratake/>
      {/* <Animation/>
      <Animation2/> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
