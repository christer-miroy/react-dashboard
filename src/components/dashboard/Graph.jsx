import { Line, LineChart, XAxis, YAxis } from 'recharts';
import graphData from '../../json/graph.json'
import './styles/graph.style.css'

const Graph = () => {
  const data = graphData;
  
  return (
    <div className='graph'>
      <strong>Today</strong>
      <div className="lineGraph">
        <LineChart
          width={900}
          height={250}
          data={data}
          margin={{
            top:30,
            right: 20,
            left: 20,
            bottom:30,
          }}
        >
          <XAxis dataKey="time" />
          <YAxis dataKey="value" label={{ value: 'Sales($)', angle: -90, position: 'insideLeft', style: { fontWeight: 'bold' }}}/>
          <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={false} />
        </LineChart>
      </div>
    </div>
  )
}
export default Graph