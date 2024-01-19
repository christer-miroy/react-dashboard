import { useLocation } from 'react-router-dom';
import './header.css'
import { FaBell } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const getPageName = () => {
    const parts = path.split('/');
    const lastPart = parts[parts.length - 1];

    switch (lastPart.toLowerCase()) {
      case 'current':
        return 'current month';
      case 'last_quarter':
        return 'last quarter';
      case 'yearend':
        return 'year-end sale';
      default:
        return lastPart;
    }
  }

  const capitalizePageName = getPageName().charAt(0).toUpperCase() + getPageName().slice(1).toLowerCase();

  return (
    <div className="header">
      <h5>{capitalizePageName}</h5>
      <div className="bell_notif">
        <FaBell />
        <div className="notification">4</div>
      </div>
    </div>
  )
}
export default Header