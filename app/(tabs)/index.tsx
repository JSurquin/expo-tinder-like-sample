import React from "react";
import { View, SafeAreaView } from "react-native";
import Swiper from "react-native-deck-swiper";
import ProfileCard from "../components/ProfileCard";
import { User, users } from "../data/users";
import { X, Heart } from "lucide-react-native";
import { Button } from "~/components/ui/button";

export default function HomeScreen() {
  const swiperRef = React.useRef<Swiper<User>>(null);
  const handleLike = (cardIndex: number) => {
    console.log(`Liked ${users[cardIndex].name}`);
  };

  const handleDislike = (cardIndex: number) => {
    console.log(`Disliked ${users[cardIndex].name}`);
  };

  return (
    <SafeAreaView className="bg-background flex-1">
      <View className="flex-1 px-4">
        <View className="flex-1 pt-4">
          <Swiper
            cards={users}
            renderCard={(card: any) =>
              card ? <ProfileCard user={card} /> : null
            }
            onSwipedLeft={handleDislike}
            onSwipedRight={handleLike}
            cardIndex={0}
            backgroundColor="transparent"
            stackSize={10}
            stackScale={10}
            stackSeparation={14}
            animateOverlayLabelsOpacity
            animateCardOpacity
            disableTopSwipe
            disableBottomSwipe
            overlayLabels={{
              left: {
                title: "NON",
                style: {
                  label: {
                    backgroundColor: "red",
                    color: "white",
                    fontSize: 24,
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    marginTop: 30,
                    marginLeft: -30,
                  },
                },
              },
              right: {
                title: "OUI",
                style: {
                  label: {
                    backgroundColor: "#4DED30",
                    color: "white",
                    fontSize: 24,
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    marginTop: 30,
                    marginLeft: 30,
                  },
                },
              },
            }}
          />
        </View>

        <View className="flex-row items-center justify-center gap-4 pb-24">
          <Button
            variant="outline"
            size="icon"
            className="h-16 w-16 rounded-full border-2 border-red-500 bg-white"
            onPress={() => {
              if (swiperRef.current) {
                swiperRef.current.swipeLeft();
              }
            }}
          >
            <X className="h-8 w-8 text-red-500" />
          </Button>

          <Button
            size="icon"
            className="bg-primary h-16 w-16 rounded-full"
            onPress={() => {
              if (swiperRef.current) {
                swiperRef.current.swipeRight();
              }
            }}
          >
            <Heart className="h-8 w-8 text-white" />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
