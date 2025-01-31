import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  BounceIn,
  SlideInDown,
} from "react-native-reanimated";
import { Heart } from "lucide-react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

export default function Splash() {
  const [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#FF4B91", "#FF7676", "#FF9F59"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <View className="flex-1 items-center justify-center">
        <Animated.View
          entering={BounceIn.duration(1000)}
          exiting={FadeOut.duration(200)}
          className="items-center"
        >
          <Heart size={80} color="white" />
          <Animated.Text
            entering={FadeIn.delay(500).duration(500)}
            style={[styles.titleText, { fontFamily: "PoppinsBold" }]}
            className="mt-4"
          >
            Here
          </Animated.Text>
          <Animated.Text
            entering={SlideInDown.delay(800).duration(500)}
            style={[styles.subtitleText, { fontFamily: "Poppins" }]}
            className="mt-4"
          >
            Trouvez l'amour ici
          </Animated.Text>
        </Animated.View>

        <Animated.View
          entering={FadeIn.delay(1200).duration(500)}
          className="absolute bottom-20"
        >
          <Text style={[styles.footerText, { fontFamily: "Poppins" }]}>
            L'amour commence ici
          </Text>
        </Animated.View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: "100%",
  },
  titleText: {
    fontSize: 36,
    color: "white",
    marginTop: 16,
  },
  subtitleText: {
    fontSize: 24,
    color: "rgba(255,255,255,0.9)",
    marginTop: 16,
  },
  footerText: {
    fontSize: 14,
    color: "rgba(255,255,255,0.6)",
  },
});
