import React, { useState } from 'react';

import { UserCard } from "../usercard/usercard";

export const Selector = () => {
  const [activeButton, setActiveButton] = useState('daily');

  const handleClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="selector_content">
      <UserCard></UserCard>
      <div className="selector-container">
        <button
          className={`selector-button ${activeButton === 'daily' ? 'active' : ''}`}
          onClick={() => handleClick('daily')}
        >
          Daily
        </button>
        <button
          className={`selector-button ${activeButton === 'weekly' ? 'active' : ''}`}
          onClick={() => handleClick('weekly')}
        >
          Weekly
        </button>
        <button
          className={`selector-button ${activeButton === 'monthly' ? 'active' : ''}`}
          onClick={() => handleClick('monthly')}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}
