import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Dot, ResponsiveContainer } from 'recharts'
import '../Sessions/Sessions.css'
import PropTypes from 'prop-types'


/**
 * @description Chart Legend (title) function
 * @param {Object} props 
 * @returns {React.ReactElement}
 */
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

/**
 * @description Custom Tooltip function
 * @param {Boolean} - active: if line hovered true
 *  @param {Object} - payload
 * @returns {React.ReactElement}
 */

const CustomTooltip = ({ active, payload }) => {
  console.log("tata", active, payload)
  if (active && payload && payload.length) {

    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}min`}</p> 
      </div>
    );
  }

  return null;
};

/**
 * @description Custom Active Dot function
 *  @param {Object} - props
 * @returns {React.ReactElement}
 */

const CustomizedActiveDot = (props) => {
  const { cx, cy } = props;
  return (
    <>
      <Dot r={4} cy={cy} cx={cx + 10} fill="#FFF"/>
      <Dot r={8} cy={cy} cx={cx + 10} fill="rgba(255, 255, 255, 0.3)" />
    </>
  )
}

/**
 * @description - component showing users's sessions(const data = USER_AVERAGE_SESSIONS.sessions) 
 * @param {Object} propTypes 
 * @returns {React.ReactElement}
 */
function Sessions({sessionsData}) {

      return (
        <div className='average-sessions'>
          <ResponsiveContainer >
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
                <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                  <stop offset="0%" stopColor="#FFF" />
                  
                  <stop offset={`${0}%`} stopColor="red" />
                  <stop offset={`${100}%`} stopColor="#FFF" />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="" horizontal="" vertical=""/>
              <XAxis 
                dataKey="day" 
                tickLine={false} 
                axisLine={false}
                height={30} 
                tick={{ fill: '#FFF', fontSize: 12, opacity: 0.5}}
                allowDataOverflow={false}
                tickFormatter={(day) => {
                  const weekday = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
                  return `${weekday[day - 1]}`
                }}
              />
              <YAxis hide={true} />
              <Tooltip contentStyle={{ color: "#000" }}itemStyle={{ color: "#000" }} cursor={false} active={true} content={<CustomTooltip />}  />
              <Legend verticalAlign="top" height={36} iconSize={6} content={renderLegend} width={200}/>
              <Line 
                type="monotone" 
                stroke="url(#colorUv)" 
                dataKey="sessionLength" 
                legendType="square"  
                strokeWidth={2} dot={false} 
                activeDot={<CustomizedActiveDot />}
              />
          
            </LineChart>
          </ResponsiveContainer>
        </div>
    ) 
  }
  export default Sessions

  Sessions.propType = {
    sessionsData: PropTypes.object.isRequired,
}
  