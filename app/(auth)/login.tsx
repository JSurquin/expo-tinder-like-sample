import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { router } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Ici on simule une connexion
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        className="flex-1 justify-center p-6"
      >
        <View className="mb-12 items-center">
          <Text className="text-4xl font-bold text-primary">TinderLike</Text>
          <Text className="mt-2 text-muted-foreground">
            Rencontrez des personnes extraordinaires
          </Text>
        </View>

        <View className="space-y-4">
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Input
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Button className="mt-2" onPress={handleLogin}>
            Se connecter
          </Button>

          <Text className="text-center text-sm text-muted-foreground">
            En vous connectant, vous acceptez nos{" "}
            <Text className="text-primary">Conditions d'utilisation</Text>
          </Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}
