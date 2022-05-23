
//CSS
import "../User/User.css"
//Components
import Sessions from "../../components/Sessions"
import Activity from "../../components/Activity"
import Welcome from "../../components/Welcome"
import Performance from "../../components/Performance"
import Score from "../../components/Score"
import Iconsidebar from "../../components/Iconsidebar"
import Error from '../Error'
//React
import { useEffect, useState } from 'react'
import { getUserById, getUserActivity, getUserAverageSessions, getUserPerformance  } from '../../services/api'
import { useParams } from "react-router-dom"


/**
 * @description User page
 * @returns {React.ReactElement}
 */

function User() {
    const { id } = useParams()
    const[user, setUser] = useState({
        userInfos:{},
        score: {todayScore: 0.0,},
        keyData: {
            calorieCount:0,
            proteinCount:0,
            carbohydrateCount:0,
            lipidCount:0,
        },
    })
    const[activity, setActivity] = useState({})
    const[sessions, setSessions] = useState([])
    const[data, setData] = useState(
        { data: [
            {value: 0, kind: 1},
            {value: 0, kind: 2},
            {value: 0, kind: 3},
            {value: 0, kind: 4},
            {value: 0, kind: 5},
            {value: 0, kind: 6},
        ], 
        kind: {} })
    const [error, setError] = useState(false)

    //useEffect - calling getUserPerformance api from api.js -- const USER_PERFORMANCE
    useEffect(() => {
  
        (async function (){
            //const USER_MAIN_DATA
            const user = await  getUserById(id)
            user !== 404 && 
            user !== undefined &&
            user !== 'can not get user' ?
            setUser(user): 
            setError(true)
            console.log(user)

        
            //const USER_ACTIVITY
            const activity  = await getUserActivity(id)
            activity !== 404 && 
            activity !== undefined &&
            activity !== 'can not get user' ?
            setActivity(activity):
            setError(true)
            console.log(activity)

            //const USER_AVERAGE_SESSIONS
            const sessions = await getUserAverageSessions(id)
            sessions !== 404 && 
            sessions !== undefined &&
            sessions !== 'can not get user' ?
            setSessions(sessions):
            setError(true)
            console.log(sessions)

            //const USER_PERFORMANCE
            const data  = await getUserPerformance(id)
            data !== 404 && 
            data !== undefined &&
            data !== 'can not get user' ?
            setData(data):
            setError(true)
            console.log(data)
    })()
  
    }, [id])

    if (error) {
        return <Error />
      }

    else {
        return( 
            <div className="user-all-activity">
                <Welcome userInfos={user.userInfos}/>
                <div className="info-wrapper">
                    <div className="recharts-graphs">
                        <Activity activityData={activity.sessions}/>
                        <div className="sessions-performance-score">
                            <Sessions sessionsData={sessions.sessions}/>
                            <Performance 
                                data={data.data}
                                kind={data.kind}   
        />
                            <Score score={user.todayScore}/>  
                        </div>
                    </div>
                    <Iconsidebar
                        caloriesNumber={user.keyData.calorieCount}
                        proteinNumber={user.keyData.proteinCount}
                        carbsNumber={user.keyData.carbohydrateCount}
                        fatNumber={user.keyData.lipidCount}
                    />
                </div>
            </div>
        )

    }  
    
    
}
export default User