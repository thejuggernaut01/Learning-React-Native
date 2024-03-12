import { View, Text, StyleSheet, Button } from "react-native";
import { useLayoutEffect } from "react";
// import { useNavigation } from "@react-navigation/native";

const AboutScreen = ({ route, navigation }) => {
  // const navigation = useNavigation();
  const { name, otherName } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          About {name} {otherName}
        </Text>
        <Button
          title="Go back home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="Update the name"
          onPress={() =>
            navigation.setParams({
              name: "aythejuggernaut",
            })
          }
        />
        <Button
          title="Go back with data"
          onPress={() =>
            navigation.navigate("Home", {
              result: "Data from about",
            })
          }
        />
      </View>
    </>
  );
};

export default AboutScreen;

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
