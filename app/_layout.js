import { Slot, Stack } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#242424" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => (
            <View>
              <Text style={styles.title}>Pokemons List</Text>
            </View>
          ),
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#242424",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff742f",
    marginTop: 10,
    textAlign: "center",
  },
});
