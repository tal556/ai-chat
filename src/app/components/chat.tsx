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

      <section className="container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl">
                <ul className="h-1 p-4 flex-grow bg-muted/50 rounded-lg overflow-y-auto flex flex-col gap-4">
                    {messages.map((m, index) => (
                        <>
                            {m.role === 'user' ? (
                                <li key={index} className="flex flex-row">
                                    <div className="rounded-xl p-4 bg-background shadow-md flex">
                                        <p className="text-primary">{m.content}</p>
                                    </div>
                                </li>
                            ) : (
                                <li key={index} className="flex flex-row-reverse">
                                    <div className="rounded-xl p-4 bg-background shadow-md flex w-3/4">
                                        <p className="text-primary"><span className="font-bold">Answer: </span>{m.content}</p>
                                    </div>
                                </li>
                            )}
                        </>
                    ))}
                </ul >
            </section>
    </main>
  );
}