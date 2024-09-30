import { StyleSheet, Text, View } from "react-native";

export default function ProfilePage() {
  return (
    <View style={styles.view1}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
