import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import '../Performance/Performance.css'
import { useEffect, useState } from 'react'
import { getUserPerformance } from '../../services/api'
import { useParams } from "react-router-dom"


//const data = const USER_PERFORMANCE
function Performance () {
    const[data, setData] = useState([
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
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={data.kind} />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey={data.data} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>    
    )

} 
export default Performance   
            