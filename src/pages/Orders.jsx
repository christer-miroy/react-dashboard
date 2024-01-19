import orders from '../json/recentOrders.json'

const Orders = () => {
  const ordersData = orders

  return (
    <div className='orders'>
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
          {ordersData.map((order, index) => (
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
    </div>
  )
}
export default Orders