import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { askOpenAI } from '../lib/chat';

interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
}

const ChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      text: 'Hey, I am Zaid\'s AI copilot. Ask me about projects, certifications, or goals!'
    }
  ]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;
    const question = input.trim();
    setMessages((prev) => [...prev, { id: Date.now(), sender: 'user', text: question }]);
    setInput('');
    setLoading(true);
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY as string | undefined;
    const answer = await askOpenAI(question, apiKey);
    setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'ai', text: answer }]);
    setLoading(false);
  };

  return (
    <div id="chat" className="relative">
      <div className="section-container">
        <div className="rounded-3xl border border-white/5 bg-white/5 p-8 text-center">
          <h2 className="section-title mb-4">AI-powered introductions</h2>
          <p className="text-slate-200">Tap the floating bubble to chat with my OpenAI assistant.</p>
        </div>
      </div>
      <button
        className="fixed bottom-8 right-8 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-sfBlue to-tealGlow text-white shadow-2xl"
        onClick={() => setOpen(true)}
        aria-label="Open AI chat"
      >
        <MessageCircle size={28} />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/60 md:items-center">
          <div className="relative m-4 w-full max-w-md rounded-3xl border border-white/10 bg-[#0f2539] p-4 shadow-2xl">
            <button
              className="absolute right-4 top-4 text-sm text-white/70"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
            <h3 className="mb-4 text-lg font-semibold text-white">Ask me about my work!</h3>
            <div className="mb-4 max-h-80 space-y-3 overflow-y-auto pr-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    msg.sender === 'ai'
                      ? 'bg-white/10 text-white'
                      : 'ml-auto bg-tealGlow/20 text-tealGlow'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && <p className="text-xs text-slate-300">Zaid's AI is typing...</p>}
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask about certifications, goals, or projects"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 rounded-2xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white focus:border-tealGlow focus:outline-none"
              />
              <button
                onClick={handleAsk}
                className="rounded-2xl bg-gradient-to-r from-sfBlue to-tealGlow px-5 py-2 text-sm font-semibold text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
