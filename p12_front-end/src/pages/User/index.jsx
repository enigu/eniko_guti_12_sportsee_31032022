
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
        score: {todayScore: 0.0,},
        keyData: {
            calorieCount:0,
            proteinCount:0,
            carbohydrateCount:0,
            lipidCount:0,
        },
    })
    const[activity, setActivity] = useState({
        sessions: [
            {day: '2020-07-01', kilogram: 80, calories: 240},
            {day: '2020-07-02', kilogram: 80, calories: 220},
            {day: '2020-07-03', kilogram: 81, calories: 280},
            {day: '2020-07-04', kilogram: 81, calories: 290},
            {day: '2020-07-05', kilogram: 80, calories: 160},
            {day: '2020-07-06', kilogram: 78, calories: 162},
            {day: '2020-07-07', kilogram: 76, calories: 390},
        ]

    }   
    )
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
export default User