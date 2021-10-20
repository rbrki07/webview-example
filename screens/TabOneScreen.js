import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const TabOneScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: "<h1>This is inline HTML</h1>" }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { TabOneScreen };
