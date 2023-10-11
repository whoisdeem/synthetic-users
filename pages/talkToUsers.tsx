import React, { useState } from 'react';
import AudienceDescriptionPrompt from '../components/AudienceDescriptionPrompt';
import StartChatButton from '../components/StartChatButton';
import ChatInterface from '../components/ChatInterface';
import ErrorMessages from '../components/ErrorMessages';
import { generateAiPersona } from '../services/aiPersonaGeneration';
import { initiateVoiceBasedConversation } from '../services/voiceBasedConversation';
import { validateUserInput } from '../utils/validateUserInput';
import { handleErrors } from '../utils/handleErrors';

const TalkToUsers = () => {
  const [aiPersona, setAiPersona] = useState(null);
  const [conversation, setConversation] = useState(null);
  const [error, setError] = useState(null);

  const handleAudienceDescription = async (description) => {
    try {
      if (!validateUserInput(description)) {
        throw new Error('invalidInputError');
      }
      const persona = await generateAiPersona(description);
      setAiPersona(persona);
    } catch (err) {
      handleErrors(err, setError);
    }
  };

  const handleStartChat = async () => {
    try {
      if (!aiPersona) {
        throw new Error('noPersonaError');
      }
      const conv = await initiateVoiceBasedConversation(aiPersona);
      setConversation(conv);
    } catch (err) {
      handleErrors(err, setError);
    }
  };

  return (
    <div>
      <AudienceDescriptionPrompt onSubmit={handleAudienceDescription} />
      <StartChatButton onClick={handleStartChat} />
      {conversation && <ChatInterface conversation={conversation} />}
      {error && <ErrorMessages error={error} />}
    </div>
  );
};

export default TalkToUsers;