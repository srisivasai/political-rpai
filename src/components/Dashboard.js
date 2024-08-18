import React from 'react';
import Tile from './Tile';
import TopPicks from './TopPicks';
import RegionalNews from './RegionalNews';
import RegionLanguageSelector from './RegionLanguageSelector';
import '../Dashboard.css';  // Ensure the path to the CSS file is correct

const tilesData = [
  { title: 'RPAI Dashboard', icon: 'AdjustmentIcon', link: '/user-management', color: 'red' },
  { title: 'Political Party Trends Analyzer', icon: 'BuildIcon', link: '/module-management', color: 'orange' },
  { title: 'Candidate Winning Chances Predictor', icon: 'HolidayIcon', link: '/holiday-management', color: 'brown' },
  { title: 'Data-Driven Campaign Strategy', icon: 'ReportIcon', link: '/reports', color: 'blue' },
  { title: 'RPAI GPT', icon: 'QueryIcon', link: '/query-builder', color: 'red' },
  { title: 'User Management', icon: 'EditIcon', link: '/data-adjustment', color: 'brown' }
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left-column">
        {tilesData.map((tile, index) => (
          <Tile key={index} title={tile.title} icon={tile.icon} link={tile.link} color={tile.color} />
        ))}
      </div>
      <div className="right-column">
        <div className="header">
          <RegionLanguageSelector />
        </div>
        
        <TopPicks />
      
      <RegionalNews />        
  
        
      </div>
    </div>
  );
};

export default Dashboard;
