import React, { useState, useEffect } from 'react';

interface ChatInterfaceProps {
  aiPersona: any;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ aiPersona }) => {
  const [conversation, setConversation] = useState<string[]>([]);

  useEffect(() => {
    if (aiPersona) {
      setConversation(prevState => [...prevState, `AI Persona: ${aiPersona.name} is ready to chat.`]);
    }
  }, [aiPersona]);

  const handleUserMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const userMessage = event.currentTarget.value;
      setConversation(prevState => [...prevState, `User: ${userMessage}`]);
      event.currentTarget.value = '';
      // TODO: Implement AI response logic
    }
  };

  return (
    <div id="chatInterface">
      <h2>Chat Interface</h2>
      <div>
        {conversation.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <input type="text" onKeyPress={handleUserMessage} placeholder="Type your message here..." />
    </div>
  );
};

export default ChatInterface;