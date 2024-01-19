import './styles/dashboard.css'
import Graph from '../components/dashboard/Graph'
import Deposits from '../components/dashboard/Deposits'
import RecentOrders from '../components/dashboard/RecentOrders'

const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className="dashboard-contents">
           <div className="row1">
            <Graph />
            <Deposits />
           </div>
           <div className="row2">
            <RecentOrders />
           </div>
        </div>
    </div>
  )
}
export default Dashboard