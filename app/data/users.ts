export interface User {
  id: string;
  name: string;
  age: number;
  bio: string;
  images: string[];
  distance: number;
  occupation: string;
}

export const users: User[] = [
  {
    id: "1",
    name: "Sophie",
    age: 25,
    bio: "Passionnée d'art et de voyages. À la recherche de nouvelles aventures !",
    images: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    ],
    distance: 3,
    occupation: "Photographe",
  },
  {
    id: "2",
    name: "Thomas",
    age: 28,
    bio: "Amateur de cuisine et de sport. Fan de cinéma et de séries Netflix.",
    images: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    ],
    distance: 5,
    occupation: "Chef cuisinier",
  },
  {
    id: "3",
    name: "Emma",
    age: 24,
    bio: "Danseuse professionnelle. J'aime les soirées calmes et les longues conversations.",
    images: [
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    ],
    distance: 8,
    occupation: "Danseuse",
  },
  {
    id: "4",
    name: "Lucas",
    age: 30,
    bio: "Ingénieur passionné de musique. Je joue de la guitare et cherche ma partenaire de duo.",
    images: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    ],
    distance: 2,
    occupation: "Ingénieur",
  },
  {
    id: "5",
    name: "Julie",
    age: 27,
    bio: "Vétérinaire et amoureuse des animaux. Je cherche quelqu'un qui partage ma passion.",
    images: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    ],
    distance: 6,
    occupation: "Vétérinaire",
  },
  {
    id: "6",
    name: "Antoine",
    age: 29,
    bio: "Architecte créatif cherchant à construire une belle histoire. Amateur de café et d'art.",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      "https://images.unsplash.com/photo-1492446845049-9c50cc313f00",
    ],
    distance: 4,
    occupation: "Architecte",
  },
  {
    id: "7",
    name: "Marie",
    age: 26,
    bio: "Professeure de yoga. En quête d'équilibre et d'harmonie dans ma vie.",
    images: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    ],
    distance: 7,
    occupation: "Professeure de yoga",
  },
  {
    id: "8",
    name: "Pierre",
    age: 31,
    bio: "Journaliste globe-trotter. Toujours prêt pour une nouvelle aventure !",
    images: [
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f",
      "https://images.unsplash.com/photo-1463453091185-61582044d556",
    ],
    distance: 9,
    occupation: "Journaliste",
  },
  {
    id: "9",
    name: "Léa",
    age: 23,
    bio: "Artiste peintre. Je colore la vie et cherche quelqu'un pour partager ma palette.",
    images: [
      "https://images.unsplash.com/photo-1557555187-23d685287bc3",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    ],
    distance: 5,
    occupation: "Artiste",
  },
  {
    id: "10",
    name: "Hugo",
    age: 28,
    bio: "Développeur web et passionné de technologie. Geek assumé cherchant sa player 2.",
    images: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    ],
    distance: 3,
    occupation: "Développeur",
  },
  // Ajoutez plus de profils...
];
