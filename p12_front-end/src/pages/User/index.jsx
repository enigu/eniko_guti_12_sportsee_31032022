//import Dashboard from "../../components/Dashboard"
import Sessions from "../../components/Sessions"
import Activity from "../../components/Activity"
import Welcome from "../../components/Welcome"
import Performance from "../../components/Performance"
import Score from "../../components/Score"
import { useEffect, useState } from 'react'
import { getUserById, getUserActivity, getUserAverageSessions, getUserPerformance  } from '../../services/api'
import { useParams } from "react-router-dom"




function User() {
    const { id } = useParams()
    const[user, setUser] = useState({})
    const[activity, setActivity] = useState([])
    const[sessions, setSessions] = useState([])
    const[data, setData] = useState([])
    
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
        <div>
            <Welcome firstName={user.userInfos}/>
            <Activity activityData={activity.sessions}/>
            <Sessions sessionsData={sessions.sessions}/>
            <Performance 
                data={data.data}
                kind={data.kind}
            />
            <Score score={data.score}/>
             
        </div>
    )
    
}
export default User