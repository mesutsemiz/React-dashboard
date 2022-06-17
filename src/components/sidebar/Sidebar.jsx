import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Samadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LİST</p>
          <li>
            <PersonOutlinedIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsRoundedIcon className="icon"/>
            <span>Products</span>
          </li>
          <li>
            <FilterFramesOutlinedIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
          <QueryStatsOutlinedIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
          <NotificationsActiveOutlinedIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVİCES</p>
          <li>
            <HealthAndSafetyOutlinedIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
          <ExitToAppOutlinedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
          </div>
    </div>
  );
};

export default Sidebar;
