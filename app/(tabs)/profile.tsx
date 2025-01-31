import { Settings } from "lucide-react-native";
import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import { Button } from "~/components/ui/button";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="bg-background flex-1">
      <ScrollView className="p-4">
        <View className="mb-6 flex-row items-center justify-between">
          <Text className="text-2xl font-bold">Mon Profil</Text>
          <Button variant="ghost" size="icon">
            <Settings className="h-6 w-6" />
          </Button>
        </View>

        <View className="items-center">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
            }}
            className="h-32 w-32 rounded-full"
          />
          <Text className="mt-4 text-xl font-semibold">Jean Dupont</Text>
          <Text className="text-gray-500">28 ans</Text>
        </View>

        <View className="mt-8">
          <Text className="mb-2 text-lg font-semibold">À propos</Text>
          <Text className="text-gray-600">
            Passionné de photographie et de voyages. Toujours à la recherche de
            nouvelles aventures !
          </Text>
        </View>

        <View className="flex-1">
          <Button className="mt-8 bg-blue-500">
            <Text className="text-white">Modifier le profil</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
