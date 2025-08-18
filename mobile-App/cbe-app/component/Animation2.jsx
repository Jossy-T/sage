import React, { useRef } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";


export default function Animation2() {
  const moveX = useRef(new Animated.Value(0)).current;


  const moveBox = () => {
    Animated.spring(moveX, {
      toValue: 200, // move 200px to the right
      useNativeDriver: true,
    }).start();
  };
return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ translateX: moveX }] }]} />
      <Button title="Move Box" onPress={moveBox} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  box: { width: 100, height: 100, backgroundColor: "green", marginBottom: 20 },
});

