import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Dot } from 'recharts'
import '../Sessions/Sessions.css'
import PropTypes from 'prop-types'

//const data = USER_AVERAGE_SESSIONS.sessions
  
function Sessions({sessionsData}) {
   

// Chart Legend (title)
    const renderLegend = (props) => {
      const { payload } = props;
    
      return (
        <ul className='sessions-legend'>
          {
            payload.map((index) => (
              <li key={`item-${index}`}>Durée moyenne des sessions</li>
            ))
          }
        </ul>
      );
    }

    //Custom Tooltip function
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value}min`}</p> 
          </div>
        );
      }
    
      return null;
    };

    //Custom Active Dot function
    const CustomizedActiveDot = (props) => {
      const { cx, cy } = props;
      return (
        <>
          <Dot r={4} cy={cy} cx={cx + 10} fill="#FFF"/>
          <Dot r={8} cy={cy} cx={cx + 10} fill="rgba(255, 255, 255, 0.3)" />
        </>
      )
    }
  

      return (
        <div className='average-sessions'>
            <LineChart
              width={240}
              height={220}
              data={sessionsData}
              margin={{ top: 10, right: 20, left: 20, bottom: 15 }}


              onMouseMove={(e) => {
                if (e.isTooltipActive === true) {
                  let div = document.querySelector('.average-sessions')
                  let windowWidth = div.clientWidth
                  let mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100)
                  // @ts-ignore
                  div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
                }
              }}
              >

              <defs>
                <linearGradient id="colorUv" x1="100%" y1="0" x2="0%" y2="0">
                  <stop offset="0%" stopColor="#FFF" />
                  
                  <stop offset={`${0}%`} stopColor="#FFF" />
                  <stop offset={`${100}%`} stopColor="red" />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="" horizontal="" vertical=""/>
              <XAxis 
                dataKey="day" 
                tickLine={false} 
                axisLine={false}
                height={30} 
                tick={{stroke: '#FFF', fontSize: 12, opacity: 0.5}}
                allowDataOverflow={false}
                tickFormatter={(day) => {
                  const weekday = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
                  return `${weekday[day - 1]}`
                }}
              />
              <YAxis hide={true} />
              <Tooltip contentStyle={{ color: "#000" }}itemStyle={{ color: "#000" }} cursor={false} active={true} content={<CustomTooltip />}  />
              <Legend verticalAlign="top" height={36} iconSize={6} content={renderLegend} width={200}/>
              <Line type="monotone" stroke="url(#colorUv)" dataKey="sessionLength" legendType="square"  strokeWidth={2} dot={false} activeDot={<CustomizedActiveDot />}
              />
          
            </LineChart>
          </div>
    ) 
  }
  export default Sessions

  Sessions.propType = {
    sessionsData: PropTypes.object.isRequired,
}
  