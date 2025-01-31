export interface Message {
  id: string;
  text: string;
  senderId: string;
  timestamp: Date;
  read: boolean;
}

export interface Conversation {
  id: string;
  userId: string;
  lastMessage: string;
  unreadCount: number;
  lastMessageTime: Date;
}

export const conversations: Conversation[] = [
  {
    id: "1",
    userId: "1", // Sophie
    lastMessage: "On se voit toujours demain ?",
    unreadCount: 2,
    lastMessageTime: new Date(2024, 2, 20, 14, 30),
  },
  {
    id: "2",
    userId: "2", // Thomas
    lastMessage: "Super resto, merci pour la soirée !",
    unreadCount: 0,
    lastMessageTime: new Date(2024, 2, 19, 23, 15),
  },
];

export const messages: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      text: "Salut ! Comment vas-tu ?",
      senderId: "1",
      timestamp: new Date(2024, 2, 20, 14, 25),
      read: true,
    },
    {
      id: "2",
      text: "Très bien et toi ?",
      senderId: "current_user",
      timestamp: new Date(2024, 2, 20, 14, 27),
      read: true,
    },
    {
      id: "3",
      text: "On se voit toujours demain ?",
      senderId: "1",
      timestamp: new Date(2024, 2, 20, 14, 30),
      read: false,
    },
  ],
};
