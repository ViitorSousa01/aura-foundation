import React from 'react';

type Message = {
  role: 'user' | 'assistant'
  content: string
}

interface ChatProps {
  messages: Message[]
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <div className="h-[60vh] overflow-y-auto space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-sm p-4 rounded-lg ${
              message.role === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200'
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
