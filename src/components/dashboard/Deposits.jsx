import './styles/deposits.style.css'
import { Link } from "react-router-dom"

const Deposits = () => {
  return (
    <div className="deposits">
      <strong>Recent Deposits</strong>
      <h1>$3,024.00</h1>
      <p>on March 15, 2019</p>
      <Link to="/balance">View balance</Link>
    </div>
  )
}
export default Deposits