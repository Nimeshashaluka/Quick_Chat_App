import { useFonts } from "expo-font";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { FontAwesome6 } from "@expo/vector-icons";
import {HeaderBar}from "../Components/HeaderBar";

// SplashScreen.preventAutoHideAsync();

export default function Home() {
  // const [loaded, error]=useFonts(
  //   {
  //     "Montserrat-Bold":require("../assets/Fonts/Montserrat-Bold.ttf"),
  //     "Montserrat-Light":require("../assets/Fonts/Montserrat-Light.ttf"),
  //     "Montserrat-Regular":require("../assets/Fonts/Montserrat-Regular.ttf"),
  //   }
  // );

  // useEffect(
  //   ()=>{
  //     if(loaded || error){
  //       SplashScreen.hideAsync();
  //     }
  //   },[loaded,error]
  // );

  // if(!loaded && !error){
  //   return null;
  // }

  return (
    <SafeAreaView style={styles.view1}>
      <HeaderBar/>
      <ScrollView>
        <View style={styles.view2}>
          <View style={styles.view3}></View>
          <View style={styles.view4}>
            <Text style={styles.text1}>Janith Perera</Text>

            <View style={styles.view5}>
              <Text style={styles.text2} numberOfLines={1}>
                Messag hhhhhhh hhhhh hhhhf fffffffffffffhhhhjjjjjjjjjjjjjjjjjje
              </Text>
            </View>
            <View style={styles.view6}>
              <FontAwesome6 name={"check"} size={18} color={"green"} />
            </View>

            <Text style={styles.text3}>8.02 AM</Text>
          </View>
        </View>

        <View style={styles.view2}>
          <View style={styles.view3}></View>
          <View style={styles.view4}>
            <Text style={styles.text1}>Janith Perera</Text>

            <View style={styles.view5}>
              <Text style={styles.text2} numberOfLines={1}>
                Messag hhhhhhh hhhhh hhhhf fffffffffffffhhhhjjjjjjjjjjjjjjjjjje
              </Text>
            </View>
            <View style={styles.view6}>
              <FontAwesome6 name={"check"} size={18} color={"green"} />
            </View>

            <Text style={styles.text3}>8.02 AM</Text>
          </View>
        </View>

        <View style={styles.view2}>
          <View style={styles.view3}></View>
          <View style={styles.view4}>
            <Text style={styles.text1}>Janith Perera</Text>

            <View style={styles.view5}>
              <Text style={styles.text2} numberOfLines={1}>
                Messag hhhhhhh hhhhh hhhhf fffffffffffffhhhhjjjjjjjjjjjjjjjjjje
              </Text>
            </View>
            <View style={styles.view6}>
              <FontAwesome6 name={"check"} size={18} color={"green"} />
            </View>

            <Text style={styles.text3}>8.02 AM</Text>
          </View>
        </View>

        <View style={styles.view2}>
          <View style={styles.view3}></View>
          <View style={styles.view4}>
            <Text style={styles.text1}>Janith Perera</Text>

            <View style={styles.view5}>
              <Text style={styles.text2} numberOfLines={1}>
                Messag hhhhhhh hhhhh hhhhf fffffffffffffhhhhjjjjjjjjjjjjjjjjjje
              </Text>
            </View>
            <View style={styles.view6}>
              <FontAwesome6 name={"check"} size={18} color={"green"} />
            </View>

            <Text style={styles.text3}>8.02 AM</Text>
          </View>
        </View>

        <View style={styles.view2}>
          <View style={styles.view3}></View>
          <View style={styles.view4}>
            <Text style={styles.text1}>Janith Perera</Text>

            <View style={styles.view5}>
              <Text style={styles.text2} numberOfLines={1}>
                Messag hhhhhhh hhhhh hhhhf fffffffffffffhhhhjjjjjjjjjjjjjjjjjje
              </Text>
            </View>
            <View style={styles.view6}>
              <FontAwesome6 name={"check"} size={18} color={"green"} />
            </View>

            <Text style={styles.text3}>8.02 AM</Text>
          </View>
        </View>

        <View style={styles.view2}>
          <View style={styles.view3}></View>
          <View style={styles.view4}>
            <Text style={styles.text1}>Janith Perera</Text>

            <View style={styles.view5}>
              <Text style={styles.text2} numberOfLines={1}>
                Messag hhhhhhh hhhhh hhhhf fffffffffffffhhhhjjjjjjjjjjjjjjjjjje
              </Text>
            </View>
            <View style={styles.view6}>
              <FontAwesome6 name={"check"} size={18} color={"green"} />
            </View>

            <Text style={styles.text3}>8.02 AM</Text>
          </View>
        </View>

        <View style={styles.view2}>
          <View style={styles.view3}></View>
          <View style={styles.view4}>
            <Text style={styles.text1}>Janith Perera</Text>

            <View style={styles.view5}>
              <Text style={styles.text2} numberOfLines={1}>
                Messag hhhhhhh hhhhh hhhhf fffffffffffffhhhhjjjjjjjjjjjjjjjjjje
              </Text>
            </View>
            <View style={styles.view6}>
              <FontAwesome6 name={"check"} size={18} color={"green"} />
            </View>

            <Text style={styles.text3}>8.02 AM</Text>
          </View>
        </View>

      </ScrollView>

      <HeaderBar/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    justifyContent: "center",
  },
  view2: {
    // backgroundColor:"yellow",
    padding: 15,
    flexDirection: "row",
    columnGap: 20,
    borderRadius: 20,
    borderWidth: 3,
    marginTop: 4,
  },
  view3: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "green",
  },
  view4: {
    flex: 1,
    // backgroundColor:"green"
  },
  view5: {
    // flex:1,
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"flex-end"
  },
  text1: {
    fontSize: 22,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 18,
    alignSelf: "flex-start",
  },
  text3: {
    fontSize: 14,
    alignSelf: "flex-end",
  },
  text5: {
    backgroundColor: "green",
    fontSize: 16,
    alignItems: "flex-end",
  },
  view6: {
    flex: 1,
    alignItems: "flex-end",
    // backgroundColor: "blue",
  },
});
