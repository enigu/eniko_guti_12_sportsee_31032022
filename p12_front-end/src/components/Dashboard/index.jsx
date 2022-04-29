import GetUserById from "../../services/api"
import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Dashboard() {
    const { id } = useParams()
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        
        function fetchUser() {
            const user = GetUserById(id)
            setUser(user)

            setIsLoading(false)
        }   
        fetchUser()

    }, [id])

    return (
        <div>
            <p>{user.userInfos.firstName}</p>
        </div>
    )

    

}

export default Dashboard