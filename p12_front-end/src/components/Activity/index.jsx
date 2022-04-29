import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getUserActivity } from '../../services/api'
import '../Activity/Activity.css'

// const USER_ACTIVITY
function Activity() {

    const[data, setData] = useState([
        {
            day: '2020-07-01',
            kilogram: 80,
            calories: 240
        },
        {
            day: '2020-07-02',
            kilogram: 80,
            calories: 220
        },
        {
            day: '2020-07-03',
            kilogram: 81,
            calories: 280
        },
        {
            day: '2020-07-04',
            kilogram: 81,
            calories: 290
        },
        {
            day: '2020-07-05',
            kilogram: 80,
            calories: 160
        },
        {
            day: '2020-07-06',
            kilogram: 78,
            calories: 162
        },
        {
            day: '2020-07-07',
            kilogram: 76,
            calories: 390
        }
    ])

    const { id } = useParams()

    //useEffect - calling getUserAverageSessions api from api.js
    /*useEffect(() => {
  
    (async function (){
      const data  = await getUserActivity(id)
      setData(data)
      console.log(data)
    })()
    
  }, [id])*/

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p className="kg">{payload[0].value}kg</p>
          <p className="calories">{payload[1].value}Kcal</p>
        </div>
      );
    }
  
    return null;
  };

    

    return (
        <div className='activity'>
            <p>Activité quoitidienne</p>
        <ResponsiveContainer className="activity-container" width="100%" aspect= {3}>
            <BarChart width={500} height={300}  barSize={7} barGap={8} data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis  padding={{ left: 20, right: 20 }} tickLine={false} tickMargin={15} 
                     domain={['minData', 'maxData']}
                    tickFormatter={(number) => number + 1}
                />
                <YAxis   yAxisId="right" dataKey="kilogram" orientation='right' type="number" domain={['dataMin - 2', 'dataMax + 2' ]} padding={{ top: 0, bottom: 0 }} axisLine={false} tickLine={false} tickMargin={15} />
                <YAxis yAxisId="left" dataKey="calories" orientation="left" hide={true} />      
                <Tooltip content={<CustomTooltip />} wrapperStyle={ {backgroundColor: '#E60000'}}  />
                <Legend  payload={[{ value: 'Poids(kg)', type: 'circle', id: 'ID01', color: '#000', }, { value: 'Calories brulées(kCal)', type: 'circle', id: 'ID02', color: '#E60000',}]} align="right" verticalAlign="top" iconSize={8} />
                <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
                <Bar yAxisId="left" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
        </div>
    )

}

export default Activity