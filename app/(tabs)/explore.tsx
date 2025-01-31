import { StyleSheet } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function AboutScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="heart.fill"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">À propos de Here</ThemedText>
      </ThemedView>

      <ThemedText>
        Here est une application de rencontre innovante qui met l'accent sur des
        connexions authentiques et significatives.
      </ThemedText>

      <Collapsible title="Notre Mission">
        <ThemedText>
          Chez Here, nous croyons que chaque rencontre peut changer une vie.
          Notre mission est de créer des connexions authentiques entre les
          personnes, en privilégiant la qualité des relations plutôt que la
          quantité.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Notre Histoire">
        <ThemedText>
          Fondée en 2023, Here est née d'une vision simple : rendre les
          rencontres plus naturelles et significatives dans un monde de plus en
          plus numérique. Notre équipe passionnée travaille chaque jour pour
          améliorer votre expérience.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Nos Valeurs">
        <ThemedText>
          • Authenticité : Nous encourageons les vraies connexions{"\n"}•
          Respect : La sécurité et le respect sont au cœur de notre plateforme
          {"\n"}• Innovation : Nous utilisons la technologie pour créer des
          expériences uniques{"\n"}• Inclusivité : Here est un espace
          accueillant pour tous
        </ThemedText>
      </Collapsible>

      <Collapsible title="Comment ça marche">
        <ThemedText>
          Here utilise un algorithme sophistiqué qui prend en compte vos
          intérêts, vos valeurs et vos objectifs pour vous proposer des
          connexions pertinentes. Nous privilégions la qualité des matchs plutôt
          que la quantité.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Notre Engagement">
        <ThemedText>
          Nous nous engageons à protéger votre vie privée et à créer un
          environnement sûr pour tous nos utilisateurs. Chaque profil est
          vérifié, et notre équipe de modération travaille 24/7 pour maintenir
          la qualité de notre communauté.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
