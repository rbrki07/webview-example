import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const TabTwoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: "https://reactnative.dev/" }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { TabTwoScreen };
