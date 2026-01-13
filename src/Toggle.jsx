import React, {useState} from "react";

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => setIsOn(!isOn);

    return (
    <div style={{ margin: '20px' }}>
      <button onClick={handleToggle}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Toggle;