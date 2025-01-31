import React from "react";
import { View, Image, Text, useWindowDimensions } from "react-native";
import { User } from "../data/users";
import { MapPin } from "lucide-react-native";

interface ProfileCardProps {
  user: User;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  const { width } = useWindowDimensions();
  const height = width * 1.5; // Ratio 2:3

  return (
    <View
      className="overflow-hidden rounded-3xl bg-white shadow-2xl"
      style={{
        width: width - 64, // Padding de 16 de chaque côté
        height: height - 32,
      }}
    >
      <Image
        source={{ uri: user.images[0] }}
        className="absolute h-full w-full"
        resizeMode="cover"
      />

      {/* Gradient overlay */}
      <View className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
        <View className="flex-row items-center gap-2">
          <Text className="text-3xl font-bold text-white">
            {user.name}, {user.age}
          </Text>
        </View>

        <View className="mt-2 flex-row items-center">
          <MapPin size={20} color="white" />
          <Text className="ml-1 text-white">À {user.distance} km</Text>
        </View>

        <Text className="mt-2 text-base text-white">{user.occupation}</Text>

        <Text className="mt-2 text-sm text-white/90">{user.bio}</Text>
      </View>
    </View>
  );
}
