import Axios from 'axios'
import {getValueFromCookie} from './CookieOperations'

async function GetAllUsers(){

    const baseUrl = "http://localhost:8080"

    const token = getValueFromCookie("Authorization")
 
    console.log("I AM MEATHOD GetAllUsers : " +token.trim())

    const authAxios = Axios.create(
        {
            baseURL : baseUrl,
             headers:{
                 Authorization:token
             }
        }
    )

    let res =  await authAxios.get('/user/all').then((a) => JSON.stringify(a))

            console.log("RESPONSE IS " + res)
           
}

export default GetAllUsers