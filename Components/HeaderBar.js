import { FontAwesome6 } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

export function HeaderBar() {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
        {/* <FontAwesome6 name={"magnifying-glass"} size={26} color={"white"} /> */}
        <FontAwesome6 name={"bars"} size={32} color={"white"} />

        </View>
        <View style={styles.view4}>
        <TextInput
              style={styles.input1}
              inputMode={"text"}
              placeholder="Search..."
             
            />

        </View>
        <View style={styles.view5}>
          <View style={styles.profile}></View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view1: {
    // flex: 1,
   
  },
  view2: {
    height:70,
    backgroundColor: "#00BFA6",
    flexDirection: "row",
    columnGap: 10,
    alignItems:"center",

  },
  view3: {
    width: 100,
    paddingStart:20
    // backgroundColor: "yellow",
  },
  view4: {
    flex: 1,
    // backgroundColor: "green",
    alignItems:"center"
  },
  view5: {
    width: 80,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    // backgroundColor: "white",
    borderWidth: 2,
    borderColor: "white",

  },
  input1: {
    width: "100%",
    height: 50,
    borderStyle: "solid",
    borderWidth: 2,
    fontSize: 18,
    fontWeight: "bold",
    paddingStart: 15,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
    marginBottom: 5,
    color:"white",
  },
});
