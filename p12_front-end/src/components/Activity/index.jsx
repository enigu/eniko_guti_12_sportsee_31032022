import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import '../Activity/Activity.css'

// const USER_ACTIVITY
function Activity({ activityData}) {

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="tooltip">
                    <p className="kg">{payload[0].value}kg</p>
                    <p className="calories">{payload[1].value}Kcal</p>
                </div>
            )
        }
        return null;
    }

    return (
        <div className='activity'>
            
            <p>Activité quoitidienne</p>
        
            <BarChart width={960} height={300}  barSize={7} barGap={8} data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis  
                    padding={{ left: 20, right: 20 }} 
                    tickLine={false} 
                    tickMargin={15} 
                    domain={['minData', 'maxData']}
                    tickFormatter={(number) => number + 1} 
                    opacity={0.5}
                />
                <YAxis   yAxisId="right" dataKey="kilogram" orientation='right' type="number" domain={['dataMin - 2', 'dataMax + 2' ]} padding={{ top: 0, bottom: 0 }} axisLine={false} tickLine={false} tickMargin={15} />
                <YAxis yAxisId="left" dataKey="calories" orientation="left" hide={true} />      
                <Tooltip content={<CustomTooltip />} wrapperStyle={ {backgroundColor: '#E60000'} } />
                <Legend  payload={[{ value: 'Poids(kg)', type: 'circle', id: 'ID01', color: '#000', }, { value: 'Calories brulées(kCal)', type: 'circle', id: 'ID02',color: '#E60000', }]} align="right" verticalAlign="top" iconSize={8} />
                <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
                <Bar yAxisId="left" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]}/>
            </BarChart>
            
        </div>
    )

}

export default Activity