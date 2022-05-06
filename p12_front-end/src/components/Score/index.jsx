import { PieChart, Pie, Legend, Cell } from 'recharts';

import '../Score/Score.css'
import PropTypes from 'prop-types'



const renderLegend = (props) => {
    const { payload } = props

    return (
        <ul className='score-legend'>
            {payload.map((payload, index) => {
                if (payload.value === 'score') {
                    return (
                        <li key={`item-${index}`} className="score-legend">
                            Score
                        </li>
                    )
                }
                return null
            })}
        </ul>
    )
}
function Score( {score}) {   
    const percentageScore = score * 100

    const data = [
        { name: 'score', value: percentageScore },
        { name: 'total', value: 100 - percentageScore }]
    
        const CustomLabel = ({ data }) => {
            const score = data.value
        
            return (
                <div className="score-label">
                    <p className="score-number">{score}%</p>
                    <p className="score-text">de votre objectif</p>
                </div>
            )
        }
    
       
        return (
            <div className="score">                 
                <PieChart width={800} height={400} >
                <Pie
                    data={data}
                    dataKey="value"
                    startAngle={210}
                    endAngle={-210}
                    innerRadius="70%"
                    outerRadius="80%"
                    cornerRadius="50%"
                >
                <Cell fill="#FF0000" stroke="#e60000"/>
                <Cell fill="transparent" stroke="transparent" />
                </Pie>
                <Pie
                    data={[{ name: 'circle', value: 100 }]}
                    dataKey="value"
                    startAngle={210}
                    endAngle={-210}
                    outerRadius="70%"
                    fill="white"
                />
                <Legend
                    verticalAlign="top"
                    content={renderLegend}
                    wrapperStyle={{ top: '10%', left: '12%' }}
                    color="black"
                />           
                </PieChart>                 
                <CustomLabel data={data[0]} />
            </div>    
        )
    
    }
export default Score

Score.propType = {
    score: PropTypes.number.isRequired,
}



