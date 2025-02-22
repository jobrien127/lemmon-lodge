import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBar.css';

const TabBar: React.FC = () => {
    return (
        <div className="tab-bar">
            <div className="tab-bar-left">
                www.lemmonlodge.com
            </div>
            <div className="tab-bar-right">
                <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
                    Home
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                    Contact
                </NavLink>
            </div>
        </div>
    );
};

export default TabBar;
