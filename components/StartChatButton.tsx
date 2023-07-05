import React from 'react';

interface StartChatButtonProps {
  initiateVoiceBasedConversation: () => void;
}

const StartChatButton: React.FC<StartChatButtonProps> = ({ initiateVoiceBasedConversation }) => {
  return (
    <button id="startChatButton" onClick={initiateVoiceBasedConversation}>
      Start Chat
    </button>
  );
};

export default StartChatButton;