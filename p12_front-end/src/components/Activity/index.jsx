import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import '../Activity/Activity.css'
import PropTypes from 'prop-types'
import React from 'react'

/**
     * @description -Custom component to Recharts graph - CustomToolTip
     * @param {Boolean} - active: if bar hovered true
     * @param {Object} - payload
     * @returns {React.ReactElement}
 */

const CustomTooltip = ({ active, payload }) => {
    console.log("toto", active, payload)
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


/**
 * Daily activity barchart: const USER_ACTIVITY
 * @param {Object} PropTypes
 * @returns {React.ReactElement}
 */
function Activity({ activityData}) {
    

    return (
        <div className='activity'>
                <p>Activité quotidienne</p>
                <ResponsiveContainer  width="100%" height="80%" aspect={600 / 200}>
                <BarChart width={750} height={200} barSize={7} barGap={8} data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis  
                    padding={{ left: 20, right: 20 }} 
                    tickLine={false} 
                    tickMargin={0} 
                    domain={['minData', 'maxData']}
                    tickFormatter={(number) => number + 1} 
                    opacity={0.5}
                    width={400}
                />
                <YAxis   yAxisId="right" dataKey="kilogram" orientation='right' type="number" domain={['dataMin - 2', 'dataMax + 2' ]} padding={{ top: 0, bottom: 0 }} axisLine={false} tickLine={false} tickMargin={0} />
                <YAxis yAxisId="left" dataKey="calories" orientation="left" hide={true} />      
                <Tooltip content={<CustomTooltip />} wrapperStyle={ {backgroundColor: '#E60000'} } active={true} />
                <Legend  payload={[{ value: 'Poids(kg)', type: 'circle', id: 'ID01', color: '#000', }, { value: 'Calories brulées(kCal)', type: 'circle', id: 'ID02',color: '#E60000', }]} align="right" verticalAlign="top" iconSize={8} />
                <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
                <Bar yAxisId="left" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]}/>
                </BarChart>
                </ResponsiveContainer>   
        </div>
    )

}

export default Activity

Activity.propType = {
    activityData: PropTypes.object.isRequired,
}