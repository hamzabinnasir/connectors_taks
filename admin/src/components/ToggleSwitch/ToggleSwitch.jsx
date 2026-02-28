import React, { useState } from 'react';
import './ToggleSwitch.css'; // Import the CSS file

const ToggleSwitch = ({ label = 'Toggle' }) => {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div className="toggle-wrapper">
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
