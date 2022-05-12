
import Sessions from "../../components/Sessions"
import "../User/User.css"
import Activity from "../../components/Activity"
import Welcome from "../../components/Welcome"
import Performance from "../../components/Performance"
import Score from "../../components/Score"
import Iconsidebar from "../../components/Iconsidebar"
import { useEffect, useState } from 'react'
import { getUserById, getUserActivity, getUserAverageSessions, getUserPerformance  } from '../../services/api'
import { useParams } from "react-router-dom"




function User() {
    const { id } = useParams()
    const[user, setUser] = useState({
        userInfos:{},
        score: {},
        keyData: {},
    })
    const[activity, setActivity] = useState([])
    const[sessions, setSessions] = useState([])
    const[data, setData] = useState({ data: [], kind: {} })
    
    //useEffect - calling getUserPerformance api from api.js -- const USER_PERFORMANCE
    useEffect(() => {
  
        (async function (){
            //const USER_MAIN_DATA
            const user = await  getUserById(id)
            setUser(user)
            console.log(user)
            const activity  = await getUserActivity(id)
            setActivity(activity)
            console.log(activity)
            const sessions = await getUserAverageSessions(id)
            setSessions(sessions)
            console.log(sessions)
            const data  = await getUserPerformance(id)
            setData(data)
            console.log(data)
    })()
  
    }, [id])

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
                        <Score score={user.score}/>  
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
export default User