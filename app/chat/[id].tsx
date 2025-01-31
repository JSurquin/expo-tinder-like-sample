import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { users } from "../data/users";
import { messages } from "../data/messages";
import { ArrowLeft, Send, Phone, Video, Info } from "lucide-react-native";
import { useMemo, useRef } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function ChatScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const user = users.find((u) => u.id === id)!;
  const chatMessages = messages[id] || [];
  const scrollViewRef = useRef<ScrollView>(null);

  const groupedMessages = useMemo(() => {
    const groups: { date: string; messages: typeof chatMessages }[] = [];
    let currentDate = "";
    let currentGroup: typeof chatMessages = [];

    chatMessages.forEach((message) => {
      const messageDate = format(message.timestamp, "dd MMMM yyyy", {
        locale: fr,
      });

      if (messageDate !== currentDate) {
        if (currentGroup.length > 0) {
          groups.push({ date: currentDate, messages: currentGroup });
        }
        currentDate = messageDate;
        currentGroup = [message];
      } else {
        currentGroup.push(message);
      }
    });

    if (currentGroup.length > 0) {
      groups.push({ date: currentDate, messages: currentGroup });
    }

    return groups;
  }, [chatMessages]);

  return (
    <SafeAreaView className="flex-1 bg-[#f0f2f5]">
      {/* Header avec dégradé */}
      <View className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-4">
            <Pressable
              className="h-10 w-10 items-center justify-center rounded-full bg-white/20"
              onPress={() => router.back()}
            >
              <ArrowLeft size={24} color="white" />
            </Pressable>
            <View className="flex-row items-center">
              <Image
                source={{ uri: user.images[0] }}
                className="h-12 w-12 rounded-full border-2 border-white"
              />
              <View className="ml-3">
                <Text className="text-lg font-bold text-white">
                  {user.name}
                </Text>
                <Text className="text-sm text-white/80">En ligne</Text>
              </View>
            </View>
          </View>
          <View className="flex-row space-x-4">
            <Phone size={24} color="white" />
            <Video size={24} color="white" />
          </View>
        </View>
      </View>

      {/* Messages avec fond arrondi */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 -mt-4 rounded-t-3xl bg-background"
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <ScrollView
          ref={scrollViewRef}
          className="flex-1 px-4 pt-6"
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
        >
          {groupedMessages.map((group) => (
            <View key={group.date} className="mb-6">
              <View className="mb-4 items-center">
                <Text className="rounded-full bg-white px-4 py-1 text-xs text-muted-foreground shadow-sm">
                  {group.date}
                </Text>
              </View>
              {group.messages.map((message, index) => (
                <Animated.View
                  key={message.id}
                  entering={FadeInUp.delay(index * 100)}
                  className={`mb-2 max-w-[80%] ${
                    message.senderId === "current_user"
                      ? "self-end"
                      : "self-start"
                  }`}
                >
                  <View
                    className={`rounded-2xl p-3 shadow-sm ${
                      message.senderId === "current_user"
                        ? "bg-gradient-to-r from-violet-500 to-fuchsia-500"
                        : "bg-white"
                    }`}
                  >
                    <Text
                      className={
                        message.senderId === "current_user"
                          ? "text-white"
                          : "text-foreground"
                      }
                    >
                      {message.text}
                    </Text>
                  </View>
                  <Text className="mt-1 text-xs text-muted-foreground px-2">
                    {format(message.timestamp, "HH:mm")}
                  </Text>
                </Animated.View>
              ))}
            </View>
          ))}
        </ScrollView>

        {/* Input stylisé */}
        <View className="border-t border-border bg-white p-4">
          <View className="flex-row items-center space-x-2">
            <TextInput
              placeholder="Votre message..."
              className="flex-1 rounded-full bg-[#f0f2f5] px-6 py-3 text-foreground"
              placeholderTextColor="#666"
            />
            <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
              <Send size={20} color="white" />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
