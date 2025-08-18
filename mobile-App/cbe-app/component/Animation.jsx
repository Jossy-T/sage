import { useRef, useEffect } from "react";
import { Animated, View, StyleSheet, Button } from "react-native";


export default function Animation() {
  const fadeAnim = useRef(new Animated.Value(0)).current;


  const fadeIN = Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 5000,
    useNativeDriver: true,
  });
  const fadeOut = Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 5000,
    useNativeDriver: true,
  });




  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { opacity: fadeAnim }]} />
      <Button title="Fade In" onPress={()=>fadeIN.start()}/>
      <Button title="reset" onPress={()=>fadeIN.reset()}/>
      <Button title="Fade Out" onPress={()=>fadeOut.start()}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  box: { width: 400, height: 400, backgroundColor: "blue" },
});

