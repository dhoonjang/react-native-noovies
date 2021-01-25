import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View, Button } from "react-native";

export default ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text>Movies</Text>
      <Button title="Movie" onPress={() => navigation.navigate("Detail")} />
    </View>
  );
};
