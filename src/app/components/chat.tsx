'use client';
 
import { useChat } from 'ai/react';
 
export default function MyComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <input value={input} onChange={handleInputChange} className='text-black'/>
        </label>
        <button type="submit">Send</button>
      </form>

      <ul>
        {messages.map((m, index) => (
          <li key={index}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </li>
        ))}
      </ul>
    </div>
  );
}