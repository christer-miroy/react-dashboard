import { Link } from 'react-router-dom'
import './sidebar.css'
import { MdDashboard } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { MdBarChart } from "react-icons/md";
import { BsFillLayersFill } from "react-icons/bs";
import { PiClipboardTextFill } from "react-icons/pi";
import { useState } from 'react';

const Sidebar = () => {
  const [minimized, setMinimized] = useState(false);

  const toggleMinimize = () => {
    setMinimized(!minimized);
  }

  return (
    <div className={`sidebar ${minimized ? 'minimized' : ''}`}>
        <div className={`minimizeBtn ${minimized ? 'minimized' : ''}`} onClick={toggleMinimize}>
          {minimized ? (
            <p>&#9776;</p>
          ) : (
            <p>&lt;</p>
          )}
        </div>
        {!minimized && <hr />}
        <div className={`links ${minimized ? 'minimized' : ''}`}>
            <Link to="/dashboard">
              {
                minimized ? (
                  <><MdDashboard /></>
                ) : (
                  <>
                    <MdDashboard />&nbsp;
                    Dashboard
                  </>
                )
              }
            </Link>
            <Link to="/orders">
              {
                minimized ? (
                  <><FaShoppingCart /></>
                ) : (
                  <>
                    <FaShoppingCart />&nbsp;
                    Orders
                  </>
                )
              }
            </Link>
            <Link to="/customers">
              {
                minimized ? (
                  <><HiMiniUsers /></>
                ) : (
                  <>
                    <HiMiniUsers />&nbsp;
                    Customers
                  </>
                )
              }
            </Link>
            <Link to="/reports">
              {
                minimized ? (
                  <><MdBarChart /></>
                ) : (
                  <>
                    <MdBarChart />&nbsp;
                    Reports
                  </>
                )
              }
            </Link>
            <Link to="/integrations">
              {
                minimized ? (
                  <><BsFillLayersFill /></>
                ) : (
                  <>
                    <BsFillLayersFill />&nbsp;
                    Integrations
                  </>
                )
              }
            </Link>
        </div>
        <hr />
        <div className={`reports ${minimized ? 'minimized' : ''}`}>
            {!minimized && <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Saved reports</strong></p>}
            <Link to="/saved_reports/current">
              {
                minimized ? (
                  <><PiClipboardTextFill /></>
                ): (
                  <>
                    <PiClipboardTextFill />&nbsp;
                    Current Month
                  </>
                )
              }
            </Link>
            <Link to="/saved_reports/last_quarter">
              {
                minimized ? (
                  <><PiClipboardTextFill /></>
                ) : (
                  <>
                    <PiClipboardTextFill />&nbsp;
                    Last Quarter
                  </>
                )
              }
            </Link>
            <Link to="/saved_reports/yearend">
              {
                minimized ? (
                  <><PiClipboardTextFill /></>
                ) : (
                  <>
                    <PiClipboardTextFill />&nbsp;
                    Year-end Sale
                  </>
                )
              }
            </Link>
        </div>
    </div>
  )
}
export default Sidebar