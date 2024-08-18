import React from 'react';
import { Link } from 'react-router-dom';
import {
  Edit as EditIcon,
  Build as BuildIcon,
  AccessTime as HolidayIcon,
  Assessment as ReportIcon,
  Dvr as QueryIcon,
  Tune as AdjustmentIcon,
  Settings as SettingsIcon,
  Security as PermissionIcon,
  CheckCircle as ApprovalIcon,
  AssignmentTurnedIn as ModuleApprovalIcon,
  EventAvailable as HolidayApprovalIcon,
  Dashboard as AdminIcon,
  DoneAll as ApprovalDashboardIcon,
  Help as HelpIcon,
  Info as AboutIcon
} from '@mui/icons-material'; // Import icons
import './Tile.css';

const iconMapping = {
  EditIcon: <EditIcon />,
  BuildIcon: <BuildIcon />,
  HolidayIcon: <HolidayIcon />,
  ReportIcon: <ReportIcon />,
  QueryIcon: <QueryIcon />,
  AdjustmentIcon: <AdjustmentIcon />,
  SettingsIcon: <SettingsIcon />,
  PermissionIcon: <PermissionIcon />,
  ApprovalIcon: <ApprovalIcon />,
  ModuleApprovalIcon: <ModuleApprovalIcon />,
  HolidayApprovalIcon: <HolidayApprovalIcon />,
  AdminIcon: <AdminIcon />,
  ApprovalDashboardIcon: <ApprovalDashboardIcon />,
  HelpIcon: <HelpIcon />,
  AboutIcon: <AboutIcon />,
};

const Tile = ({ title, icon, link, color }) => {
  return (
    <Link to={link} className="tile" style={{ '--color': color }}>
      <div className="tile-icon">{iconMapping[icon]}</div>
      <div className="tile-title">{title}</div>
    </Link>
  );
};

export default Tile;
