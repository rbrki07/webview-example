import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const TabThreeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={require("./../html/example.html")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { TabThreeScreen };
