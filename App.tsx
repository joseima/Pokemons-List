import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Main } from "./components/Main";

export const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "auto",
    backgroundColor: "#000",
    paddingHorizontal: 12,
    flexWrap: "nowrap",
    gap: 20,
  },
});
