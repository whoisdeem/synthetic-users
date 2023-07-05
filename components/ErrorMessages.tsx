import React from 'react';

interface ErrorMessagesProps {
  errorType: string;
}

const ErrorMessages: React.FC<ErrorMessagesProps> = ({ errorType }) => {
  const messages = {
    invalidInputError: 'Your input is invalid. Please try again.',
    technicalError: 'There seems to be a technical issue. Please try again later.',
  };

  return (
    <div>
      <p>{messages[errorType]}</p>
    </div>
  );
};

export default ErrorMessages;