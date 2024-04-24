'use client';
 
import { useChat } from 'ai/react';
 
export default function MyComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    <main className="flex flex-col w-full h-screen max-h-dvh bg-background">

      <header className="p-4 border-b w-full max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold">AI Chat</h1>
      </header>

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
    </main>
  );
}