import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import '../Performance/Performance.css'
import PropTypes from 'prop-types'


//const data = const USER_PERFORMANCE
function Performance ( { data, kind } ) {
    /*const[data, setData] = useState([
        {
            
            kind: {
                1: 'cardio',
                2: 'energy',
                3: 'endurance',
                4: 'strength',
                5: 'speed',
                6: 'intensity'
            },
            data: [
                {
                    value: 80,
                    kind: 1
                },
                {
                    value: 120,
                    kind: 2
                },
                {
                    value: 140,
                    kind: 3
                },
                {
                    value: 50,
                    kind: 4
                },
                {
                    value: 200,
                    kind: 5
                },
                {
                    value: 90,
                    kind: 6
                }
            ]
        }
    ]
    )
    const { id } = useParams()

//useEffect - calling getUserPerformance api from api.js
/*useEffect(() => {
  
  (async function (){
    const data  = await getUserPerformance(id)
    setData(data)
    console.log(data)
  })()
  
}, [id])*/
    return (
        
        <div className='performance'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    outerRadius="65%"
                    cx="52%"
                    cy="52%"
                    data={data}
                    style={{ background: '#282D30' }}
                    startAngle={390}
                    endAngle={30}
                >
                <PolarGrid radialLines={false} />    
                <PolarAngleAxis
                    dataKey="kind"
                    tickFormatter={(kindNumber) => {
                    return (
                    typeof kindNumber === 'number' &&
                    kind[kindNumber] &&
                    `${kind[kindNumber].substring(0, 1).toUpperCase()}${kind[
                    kindNumber
                    ].substring(1)}`
                    )
                    }}
                    stroke="#FFF"
                    tickLine={false}
                />
                <PolarRadiusAxis axisLine={false} tick={false} />
                <Radar
                    dataKey="value"
                    stroke="#ff0000"
                    fill="#ff0101b3"
                    fillOpacity={0.6}
                    width={100}
                />
                </RadarChart>
                </ResponsiveContainer>
        </div>
    )

} 
export default Performance 

Performance.propType = {
    data: PropTypes.object.isRequired,
    kind: PropTypes.object.isRequired,
  }
            