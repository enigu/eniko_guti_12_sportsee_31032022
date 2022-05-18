import Error from '../pages/Error'

/**
 * Fetch every endpoints for components
 * Return promises
 */

let baseURL = "http://localhost:3000/User/"

/**
 * @description async function to get user's main data: const USER_MAIN_DATA
 * @param { string } id 
 * @returns { promise }
 * @async
 */

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

/**
 * @description async function to get user's activity: const USER_ACTIVITY
 * @param { string } id 
 * @returns { promise }
 * @async
 */

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

/**
 * @description async function to get user's average sessions: const USER_AVERAGE_SESSIONS
 * @param { string } id 
 * @returns { promise }
 * @async
 */

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

/**
 * @description async function to get user's performance: const USER_PERFORMANCE
 * @param { string } id 
 * @returns { promise }
 * @async
 */

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