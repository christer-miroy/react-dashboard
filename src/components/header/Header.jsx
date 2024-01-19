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
        return 'Current Month';
      case 'last_quarter':
        return 'Last Quarter';
      case 'yearend':
        return 'Year-end Sale';
      default:
        return lastPart;
    }
  }

  return (
    <div className="header">
      <h5>{getPageName()}</h5>
      <div className="bell_notif">
        <FaBell />
        <div className="notification">4</div>
      </div>
    </div>
  )
}
export default Header