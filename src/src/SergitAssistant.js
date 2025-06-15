import React, { useState } from 'react';
import './SergitAssistant.css';

const sergitAvatar = (
  <img src="/sergit-avatar.svg" alt="SERGIT Kadın Avatar" className="sergit-avatar" />
);

const defaultMessages = [
  { from: 'sergit', text: 'Merhaba! Ben SERGIT, size nasıl yardımcı olabilirim?' }
];

export default function SergitAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    // Demo cevap
    setTimeout(() => {
      setMessages(msgs => ([...msgs, { from: 'sergit', text: 'SERGIT: Sorunuzu aldım, en kısa sürede yanıtlayacağım!' }]));
    }, 700);
    setInput('');
  };

  return (
    <div className={`sergit-assistant${open ? ' open' : ''}`}> 
      {open ? (
        <div className="sergit-window">
          <div className="sergit-header">
            <span style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>{sergitAvatar} SERGIT Asistan</span>
            <button className="sergit-close" onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="sergit-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`sergit-msg ${msg.from}`}>{msg.from === 'sergit' && <span className="sergit-avatar-inline">{sergitAvatar}</span>} {msg.text}</div>
            ))}
          </div>
          <form className="sergit-input-bar" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Mesajınızı yazın..."
              autoFocus
            />
            <button type="submit">Gönder</button>
          </form>
        </div>
      ) : (
        <button className="sergit-fab" onClick={() => setOpen(true)}>
          {sergitAvatar}
          <span className="sergit-fab-label">SERGIT</span>
        </button>
      )}
    </div>
  );
} 