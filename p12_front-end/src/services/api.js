import Error from '../pages/Error'

let baseURL = "http://localhost:3000/User/"

//const USER_MAIN_DATA
async function getUserById(id) {

    const url = baseURL + `${id}`
    
    try {
       
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
    
        const json = await response.json();
        return json.data    
    }
    catch(error) {
        console.log(error);
    } 
}



//const USER_ACTIVITY
async function getUserActivity(id) {
    
    const url = baseURL + `${id}/activity` 
    
    try {
       
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
    
        const json = await response.json();
        return json.data   
    }
    catch(error) {
        console.error(`Could not get user: ${error}`);
    } 
}

//const USER_AVERAGE_SESSIONS
async function getUserAverageSessions(id) {

    const url = baseURL + `${id}/average-sessions` 
    
    try {
       
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
    
        const json = await response.json();
        return json.data   
    }
    catch(error) {
        console.error(`Could not get user: ${error}`);
    } 
}

//const USER_PERFORMANCE
async function getUserPerformance(id) {

    const url = baseURL + `${id}/performance` 
    
    try {
       
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
    
        const json = await response.json();
        return json.data   
    }
    catch(error) {
        console.error(`Could not get user: ${error}`);
    } 
}




export {
    getUserById,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance
}    