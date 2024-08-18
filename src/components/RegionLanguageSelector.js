import React, { useState } from 'react';

const RegionLanguageSelector = () => {
  const [selectedOption, setSelectedOption] = useState('India (English)');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="region-language-selector">
      <label htmlFor="region-language-select">Region & language</label>
      <select
        id="region-language-select"
        value={selectedOption}
        onChange={handleChange}
        className="selector-dropdown"
      >
        <option value="India (English)">India (English)</option>
        <option value="United States (English)">United States (English)</option>
        <option value="Spain (Spanish)">Spain (Spanish)</option>
        <option value="Germany (German)">Germany (German)</option>
        
      </select>
    </div>
  );
};

export default RegionLanguageSelector;
