import React, { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  return (
    <div style={{ margin: '20px' }}>
      <input 
        type="text" 
        placeholder="Type something..." 
        value={text} 
        onChange={handleChange} 
      />
      <p>You typed: {text}</p>
    </div>
  );
};

export default TextInput;