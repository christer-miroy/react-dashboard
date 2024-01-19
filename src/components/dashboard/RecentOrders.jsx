import './styles/recentOrders.style.css'
import { Link } from 'react-router-dom';
import recentOrders from '../../json/recentOrders.json'

const RecentOrders = () => {
  const orders = recentOrders.slice(0, 5);

  return (
    <div className='recentOrders'>
      <strong>Recent Orders</strong>
      <table className='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Ship To</th>
            <th>Payment Method</th>
            <th>Sale Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.date}</td>
              <td>{order.name}</td>
              <td>{order.shipTo}</td>
              <td>{order.paymentMethod}</td>
              <td>{order.saleAmt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to='/orders'>See more orders</Link>
    </div>
  )
}
export default RecentOrders