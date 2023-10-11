```typescript
export interface VoiceBasedConversation {
  id: string;
  aiPersonaId: string;
  userId: string;
  conversation: {
    userMessage: string;
    aiResponse: string;
  }[];
}

export function initiateVoiceBasedConversation(userId: string, aiPersonaId: string): VoiceBasedConversation {
  return {
    id: generateId(),
    aiPersonaId,
    userId,
    conversation: [],
  };
}

export function addMessageToConversation(conversation: VoiceBasedConversation, userMessage: string, aiResponse: string): VoiceBasedConversation {
  return {
    ...conversation,
    conversation: [...conversation.conversation, { userMessage, aiResponse }],
  };
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
```