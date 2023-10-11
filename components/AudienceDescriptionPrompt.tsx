import React, { useState } from 'react';

const AudienceDescriptionPrompt: React.FC = () => {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <h2>Describe Your Target Audience</h2>
      <textarea
        id="audienceDescriptionInput"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Describe your target audience here..."
      />
    </div>
  );
};

export default AudienceDescriptionPrompt;