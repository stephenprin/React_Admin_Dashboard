import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./single.scss"

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: {}[]
  };
  activity?:{time:string, text:string}[]

}

const Single = (props:Props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
           {props.img &&  <img src={props.img} alt={props.title} />}
            <h2>{props.title}</h2>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(props.info).map(item => (
              <div className="item" key={item[0]}>
              <span className="itemName">{item[0]}:</span>
                <span className="itemValue">{ item[1]}</span>
            </div>
           ))}
            
          </div>
        </div>
        <hr/>
        <div className="chart">
        {props.chart && <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={props.chart.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
              {props.chart.dataKeys.map(dataKey => (
            
                <Line type="monotone" dataKey={dataKey.name} stroke={dataKey.color} />
                
          ))}
        </LineChart>
      </ResponsiveContainer>}
        </div>
      </div>
      <div className="activity">
        <h2>Latest Activities</h2>
        {props.activity &&  <ul>
          {props.activity.map(actin => (
            <li key={actin.text}>
            <div>
                <p>{ actin.text}</p>
                <time>{ actin.time}</time>
            </div>
          </li>
          ))}
          
        </ul>
        }
      </div>
    </div>
  )
}

export default Single
