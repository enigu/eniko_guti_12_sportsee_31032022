import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'
import '../Performance/Performance.css'
import PropTypes from 'prop-types'

/**
 * @description - component showing users's performance(const data = const USER_PERFORMANCE) 
 * @param {Object} propTypes 
 * @param {Object} propTypes.data
 * @param {Object} propTypes.kind
 * @returns {React.ReactElement}
 */
function Performance( { data, kind } ) {
 
    return (
        <div className='performance'>
          <RadarChart  
            width={230} 
            height={220} 
            outerRadius="65%" 
            cx="52%"
            cy="52%"
            data={data}
            style={{ background: '#282D30' }}
            startAngle={390}
            endAngle={30}
          >
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis 
            dataKey="kind" 
            tickFormatter={(kindNumber) => {
              return (
                typeof kindNumber === 'number' && kind[kindNumber] && `${kind[kindNumber].substring(0, 1).toUpperCase()}${kind[kindNumber].substring(1)}`
              )
            }}
            stroke="#FFF"
            tickLine={false}  
            />
          <PolarRadiusAxis axisLine={false} tick={false}/>
          <Radar 
            dataKey="value" 
            stroke="#ff0000" 
            fill="#ff0101b3" 
            fillOpacity={0.6} 
            width={100}
          />
          </RadarChart>             
        </div>        
    )
}
export default Performance 
Performance.propType = {
    data: PropTypes.object.isRequired,
    kind: PropTypes.object.isRequired,
}



            