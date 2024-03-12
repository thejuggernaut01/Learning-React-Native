import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation, route }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        {route.params?.result && (
          <Text style={styles.text}>{route.params?.result}</Text>
        )}
        <Button
          title="Go to About"
          onPress={() =>
            navigation.navigate("About", {
              name: "Ayoola",
            })
          }
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
