import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import { users } from "../data/users";
import { conversations } from "../data/messages";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { router } from "expo-router";
import { Search, MessageCircle } from "lucide-react-native";
import { Input } from "~/components/ui/input";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function MatchesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#f0f2f5]">
      {/* Header avec dégradé */}
      <View className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4 pb-6">
        <View className="flex-row items-center justify-between">
          <Text className="text-3xl font-bold text-white">Messages</Text>
          <MessageCircle size={28} color="white" />
        </View>
      </View>

      <Animated.View
        entering={FadeInDown.duration(750).springify()}
        className="flex-1 -mt-4 rounded-t-3xl bg-background px-4"
      >
        {/* Barre de recherche */}
        <View className="mt-6 mb-4">
          <Input
            placeholder="Rechercher une conversation..."
            className="bg-white/90 pl-10 h-12 rounded-xl shadow-sm"
          />
          <Search
            size={18}
            className="text-muted-foreground absolute left-3 top-4"
          />
        </View>

        {/* Nouveaux matches */}
        <Text className="mb-3 text-lg font-bold text-foreground">
          Nouveaux Matches
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-6"
        >
          {users.map((user) => (
            <Pressable
              key={user.id}
              className="mr-4 items-center"
              onPress={() => router.push(`/chat/${user.id}`)}
            >
              <View className="relative">
                <Image
                  source={{ uri: user.images[0] }}
                  className="h-20 w-20 rounded-2xl"
                  style={{ borderWidth: 3, borderColor: "#FF4B91" }}
                />
                <View className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-background bg-green-500" />
              </View>
              <Text className="mt-2 text-sm font-semibold">{user.name}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Liste des conversations */}
        <Text className="mb-3 text-lg font-bold text-foreground">
          Messages récents
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {conversations.map((conversation) => {
            const user = users.find((u) => u.id === conversation.userId)!;
            return (
              <Pressable
                key={conversation.id}
                className="mb-4 flex-row items-center rounded-xl bg-white p-3 shadow-sm"
                onPress={() => router.push(`/chat/${user.id}`)}
              >
                <View className="relative">
                  <Image
                    source={{ uri: user.images[0] }}
                    className="h-16 w-16 rounded-xl"
                  />
                  {conversation.unreadCount > 0 && (
                    <View className="absolute -right-1 -top-1 h-6 w-6 items-center justify-center rounded-full bg-fuchsia-500 border-2 border-white">
                      <Text className="text-xs font-bold text-white">
                        {conversation.unreadCount}
                      </Text>
                    </View>
                  )}
                </View>
                <View className="ml-4 flex-1">
                  <View className="flex-row items-center justify-between">
                    <Text className="text-lg font-bold">{user.name}</Text>
                    <Text className="text-sm text-muted-foreground">
                      {formatDistanceToNow(conversation.lastMessageTime, {
                        addSuffix: true,
                        locale: fr,
                      })}
                    </Text>
                  </View>
                  <Text
                    numberOfLines={1}
                    className={`text-sm ${
                      conversation.unreadCount > 0
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {conversation.lastMessage}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
}
