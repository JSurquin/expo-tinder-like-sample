# Documentation du Projet Here (Application de rencontre style Tinder)

## Structure du Projet

Le projet suit une architecture basée sur Expo Router avec les dossiers principaux suivants :

- `app/` : Contient la logique principale de l'application
  - `(auth)/` : Routes d'authentification
  - `(tabs)/` : Routes principales de l'application
  - `chat/` : Gestion des conversations
  - `components/` : Composants spécifiques
  - `data/` : Données mockées
- `assets/` : Ressources statiques (images, fonts)
- `components/` : Composants UI réutilisables

## Fichiers de Configuration

### babel.config.js

Configuration de Babel pour NativeWind et Expo.

### tailwind.config.js

Configure Tailwind CSS pour React Native :

- Scanning des fichiers pour les classes
- Preset NativeWind
- Configuration du thème

### metro.config.js

Bundler Metro pour Expo :

- Support NativeWind
- Transformations CSS
- Gestion des assets

### app.json

Configuration Expo :

- Nom et version
- Configuration iOS/Android
- Splash screen
- Plugins
- Build settings

### eas.json

Configuration EAS :

- Profils de build
- Distribution
- Versioning
- Soumission stores

## Dépendances Principales

### Navigation

- `expo-router`
- `@react-navigation/native`

### UI/Styling

- `nativewind`
- `react-native-reanimated`
- `react-native-deck-swiper`
- `expo-linear-gradient`

### Utilitaires

- `date-fns`
- `lucide-react-native`

## Fonctionnalités Clés

1. **Authentification**

   - Login stylisé
   - Navigation sécurisée

2. **Swipe**

   - Cartes swipables
   - Animations fluides
   - Like/Dislike

3. **Messagerie**

   - Liste conversations
   - Chat temps réel
   - Statuts

4. **Profil**
   - Infos utilisateur
   - Édition
   - Settings

## Style et Design

- NativeWind (Tailwind)
- Dégradés cohérents
- Animations fluides
- Design responsive
- Mode sombre

## Points Techniques

1. **Architecture**

   - Modulaire
   - Séparation des responsabilités
   - Composants réutilisables

2. **Performance**

   - Lazy loading
   - Animations optimisées
   - Gestion assets

3. **Maintenance**
   - TypeScript
   - Structure claire
   - Config centralisée

## Bonnes Pratiques

1. **Code**

   - TypeScript
   - Réutilisabilité
   - Nommage cohérent

2. **Structure**

   - Organisation claire
   - Responsabilités séparées
   - Config modulaire

3. **Style**
   - Tailwind cohérent
   - Thème
   - Responsive

## Déploiement

Via EAS :

- Dev builds
- Preview builds
- Production builds
- iOS/Android config

## Conclusion

Application moderne avec :

- Architecture React Native/Expo
- UX fluide
- Code maintenable
- Évolutivité
